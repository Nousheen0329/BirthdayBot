# WhatsApp Birthday Bot 🎉

This is a Node.js-based bot that automatically sends birthday messages via WhatsApp using `whatsapp-web.js`. It reads data from an Excel file (`birthdays.xlsx`) and sends personalized greetings.

## Features 🚀

- Sends WhatsApp birthday messages automatically.
- Uses `whatsapp-web.js` for WhatsApp Web integration.
- Reads contacts and birthdays from an Excel sheet.

## Technologies Used 🛠️

- **Node.js**: JavaScript runtime.
- **whatsapp-web.js**: WhatsApp automation library.
- **xlsx**: Reads Excel files.
- **dotenv**: Manages environment variables.
- **qrcode-terminal**: Generates QR codes for authentication.

---

## Installation & Setup 🏗️

### **1️⃣ Prerequisites**

- Install **Node.js** (v18+ recommended)
- Install **Git**
- Install dependencies:
  ```sh
  npm install
  ```

### **2️⃣ Set Up Environment Variables**

Create a `.env` file:

```ini
MY_PHONE_NUMBER=91xxxxxxxxxx
SESSION_PATH=./session
```

### **3️⃣ Prepare Your Excel File**

Create `birthdays.xlsx` with the following format:

| Name  | Phone Number | Birthday |
| ----- | ------------ | -------- |
| John  | 918123456789 | 07-26    |
| Alice | 919876543210 | 08-05    |

**Ensure:**

- The date format is `MM-DD`.
- Phone numbers include country code.

---

## Running the Bot Locally 🖥️

```sh
node birthdayBot.js
```

- Scan the **QR code** on the console using your **WhatsApp**.
- The bot will send messages if today matches any birthday in `birthdays.xlsx`.

---

**Happy Coding! 🎂🥳**

