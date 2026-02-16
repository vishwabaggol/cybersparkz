require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
    console.log('Testing email configuration...');
    console.log(`User: ${process.env.EMAIL_USER}`);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_USER === 'your-email@gmail.com') {
        console.error('❌ Error: EMAIL_USER and EMAIL_PASS are not configured in .env file.');
        console.log('Please edit server/.env and add your Gmail credentials.');
        return;
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to self
        subject: 'Test Email from CyberSparkz',
        text: '✅ Success! If you receive this, your email configuration is working correctly.'
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        console.log('Response:', info.response);
    } catch (error) {
        console.error('❌ Error sending email:', error);
        if (error.code === 'EAUTH') {
            console.log('👉 Tip: Check if your App Password is correct and 2-Step Verification is enabled.');
        }
    }
}

testEmail();
