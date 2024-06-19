import nodemailer from 'nodemailer'


const createTransporter = async () => {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Ou outro serviço de e-mail
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  return transporter;
};


const sendVerificationEmail = async (email, userId, verificationToken) => {
  const transporter = await createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verificação de E-mail',
    html: `
      <h1>Verifique seu e-mail</h1>
      <p>Por favor, clique no link abaixo para verificar seu novo e-mail:</p>
      <a href="${process.env.FRONTEND_URL}/verify-email/${userId}/${verificationToken}">Verificar E-mail</a>
    `
  };

  await transporter.sendMail(mailOptions);
};

