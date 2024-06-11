const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "weihao.niuace@gmail.com", // Your Gmail email address
      pass: "NiuAceMWCT666", // Your Gmail password
    },
  });

  // Email message options
  const mailOptions = {
    // from: "your-email@gmail.com", // Sender address
    to: "weihao.niuace@gmail.com", // Receiver address
    subject: "New Message from Hao's Web App's Relax Page", // Email subject
    text: message, // Plain text body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
