const Contact = require("../models/contactData"); // your Mongoose model
const nodemailer = require("nodemailer");

// ✅ Setup email transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


const submitContactForm = async (req, res) => {
    try {
        console.log("Received contact form:", req.body);

        const newContact = new Contact(req.body);
        await newContact.save();

        console.log("Contact saved successfully");

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER, // where you want to receive emails
            subject: `New Contact Form Submission from ${req.body.name}`,
            text: `
                Name: ${req.body.name}
                Email: ${req.body.email}
                Message: ${req.body.message}
            `,
        });

        res.status(201).json({ message: "Contact saved & email sent successfully" });
    } catch (err) {
        console.error("Error saving contact:", err);
        res.status(500).json({ message: "Server error. Try again later" });
    }
};

module.exports = { submitContactForm };

