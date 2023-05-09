const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: true,
            auth: {
                user: 'suraj.jaybhaye@mitaoe.ac.in',
                pass: 'Suraj@77!',
            },
        });

        await transporter.sendMail({
            from: "E-commerce D-App",
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;