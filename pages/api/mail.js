/** @format */
import mail from "@sendgrid/client";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (res, req) => {
    const body = JSON.parse(req.body);

    const message = `
    Name: ${body.name}
    Email: ${body.email}
    Subject: ${body.subject}
    Message: ${body.message}

    `;
    const data = {
        to: "lukaszbanaszek@inoxspaw.eu",
        from: "lukaszbanaszek@inoxspaw.eu",
        replayTo: message.email,
        subject: message.subject,
        text: message,
    };

    mail.send(data);

    res.status(200).json({ status: "ok" });
};
