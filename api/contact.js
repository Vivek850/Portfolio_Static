import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject ,message } = req.body;

    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail", // या कोई SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Env variable
        pass: process.env.EMAIL_PASS, // Env variable (App Password)
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // तुम्हारा email
        subject: subject || `New Contact from ${name}`,
        text: message,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
