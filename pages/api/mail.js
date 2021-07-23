/** @format */

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
    return new Promise(() => {
        const body = JSON.parse(req.body);
        console.log("body", body);

        const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Subject: ${body.option}\r\n
  Message: ${body.message}

  `;

        const data = {
            to: "hajzeer@wp.pl",
            from: "hajzeer@wp.pl",
            subject: "Nowa wiadomość z formularza na stronie",
            text: message,
            html: message.replace(/\r\n/g, "<br>"),
        };

        sgMail
            .send(data)
            .then(() => {
                console.log("email sent");
                res.status(200).json({ status: "ok" });
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
