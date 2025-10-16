import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    try {
        const { name, email, message } = req.body || {};
        if (!name || !email || !message)
            return res.status(400).json({ ok: false, error: "Datos incompletos" });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD, // App Password de Gmail
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: "franco.kasmenko@get-coded.com",
            replyTo: `"${name}" <${email}>`,
            subject: "Nuevo contacto — GetCoded",
            text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
        });

        res.status(200).json({ ok: true });
    } catch (err) {
        console.error("Error enviando correo:", err);
        res.status(500).json({ ok: false, error: "Fallo al enviar correo" });
    }
}
