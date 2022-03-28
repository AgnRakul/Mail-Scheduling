const express = require('express');
const app = express();
const cron = require('node-cron');
const mailer = require('nodemailer');

// Schedule a task to run every minute.
// cron.schedule('* * * * *', () => {console.log("Task is running every minute " + new Date())});

// Scheduling the email task
function runJon() {
    cron.schedule('1 * * * * *', () => sendEmail("Kiruku Munda"));
}
runJon()


//function that sends email
function sendEmail(message) {
    // Creating a transporter
    const transporter = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'rakul0agn@gmail.com',
            pass: "rjebvgndlnczjrau",
        }
    });
    //sending the email
    transporter.sendMail({
        from: '"Peter" <rakul0agn@gmail.com>',
        to: '"You there" <kumarresan381@gmail.com>',
        subject: 'Scheduled Email',
        text: message
    })
        .then(_ => { console.log("Email has been sent") })
        .catch(error => { console.log(error) });
}

app.listen(2400, () => { console.log("Server started at port 2400") });