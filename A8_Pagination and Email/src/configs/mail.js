const nodemailer = require("nodemailer");


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "9bdc63a21618d3", // generated ethereal user
    pass: "4c6ddf199ed093", // generated ethereal password
  },
  pool: true, // use pooled connection
  rateLimit: 3, // enable to make sure we are limiting
  maxConnections: 1, // set limit to 1 connection only
  maxMessages: 3, // send 3 emails per second
});

module.exports = transporter;