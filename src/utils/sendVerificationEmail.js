
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail', // ou outro serviço de e-mail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = (email, token) => {
  const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verificação de E-mail',
    text: `Por favor, verifique seu e-mail clicando no seguinte link: ${verificationLink}`,
    html: `<p>Por favor, verifique seu e-mail clicando no seguinte link: <a href="${verificationLink}">Verificar E-mail</a></p>`,
  };

  return transporter.sendMail(mailOptions);
};
