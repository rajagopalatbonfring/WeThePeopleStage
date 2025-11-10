require('dotenv').config({ path: './.env' }); // Load .env from backend folder
const express = require('express');
const emailjs = require('@emailjs/nodejs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the parent directory (WeThePeopleStage root)
app.use(express.static(path.join(__dirname, '..')));

// Initialize EmailJS
emailjs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

// Endpoint for Contact Form
app.post('/send-contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ status: 'error', message: 'All fields are required' });
    }

    const templateParams = { name, email, subject, message };

    try {
        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_CONTACT_TEMPLATE_ID,
            templateParams
        );
        res.status(200).json({ status: 'success', message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Failed to send contact email:', error);
        res.status(500).json({ status: 'error', message: `Failed to send message: ${error.text || error.message}` });
    }
});

// Endpoint for Get Involved Form
app.post('/send-get-involved', async (req, res) => {
    const {
        First_Name, Last_Name, Email, Phone_Number, City, State, Interest,
        Organization, Skills_Expertise, Message, Availability, Agree_to_Updates
    } = req.body;

    // Validate required fields
    if (!First_Name || !Last_Name || !Email || !Phone_Number || !City || !State || !Interest || !Message) {
        return res.status(400).json({ status: 'error', message: 'Please fill in all required fields' });
    }

    const templateParams = {
        First_Name,
        Last_Name,
        Email,
        Phone_Number,
        City,
        State,
        Interest,
        Organization: Organization || '(Not provided)',
        Skills_Expertise: Skills_Expertise || '(Not provided)',
        Message,
        Availability: Availability || '(Not provided)',
        Agree_to_Updates: Agree_to_Updates || 'No'
    };

    try {
        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_GET_INVOLVED_TEMPLATE_ID,
            templateParams
        );
        res.status(200).json({ status: 'success', message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Failed to send get-involved email:', error);
        res.status(500).json({ status: 'error', message: `Failed to send form: ${error.text || error.message}` });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});