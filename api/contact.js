import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const body =
        typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { name, email, message } = body;

    if (!name || !email || !message)
        return res.status(400).json({ ok: false, error: "Datos incompletos" });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: "franco.kasmenko@get-coded.com",
            replyTo: `"${name}" <${email}>`,
            subject: "Nuevo contacto — GetCoded",
            text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
        });
        res.status(200).json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: "Error al enviar correo" });
    }
}
