require("dotenv").config();
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const xlsx = require("xlsx");

const workbook = xlsx.readFile("birthdays.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const birthdayData = xlsx.utils.sheet_to_json(sheet);

const MY_PHONE_NUMBER = process.env.MY_PHONE_NUMBER;
const SESSION_PATH = process.env.SESSION_PATH;

const client = new Client({
  authStrategy: new LocalAuth({ dataPath: SESSION_PATH }),
});

client.on("qr", (qr) => {
  console.log("Scan this QR code to log in:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp bot is ready!");

  const today = new Date()
    .toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" })
    .slice(5, 10);

  birthdayData.forEach(({ Name, "Phone Number": PhoneNumber, Birthday }) => {
    const phoneNumber = String(PhoneNumber).trim();

    if (!Name || !PhoneNumber || !Birthday) {
      console.error(`⚠ Invalid data for ${Name || "Unknown"}. Skipping...`);
      return;
    }

    if (Birthday === today) {
      const message = `🎉 Happy Birthday, ${Name}!🎉 🎂🎈 Have a great day! 🎂🎈`;

      client
        .sendMessage(PhoneNumber + "@c.us", message)
        .then(() => console.log(`🎈 Message sent to ${Name} (${PhoneNumber})`))
        .catch(() => {
          console.error(
            `❌ Failed to send message to ${Name} (${PhoneNumber})`
          );
          client.sendMessage(
            MY_PHONE_NUMBER + "@c.us",
            `🚨 Failed to send birthday message to ${Name} (${PhoneNumber}).`
          );
        });
    }
  });

  setTimeout(() => {
    console.log("🔴 Closing bot...");
    client.destroy();
    process.exit();
  }, 10000);
});

client.initialize();
