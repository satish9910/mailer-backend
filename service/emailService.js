const nodemailer = require("nodemailer");

const sendEmail = async ( subject , description , email) => {
  try {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
      auth: {
        user:"palsatish311@gmail.com",
        pass:"ghas menm aqpf vhls",
      },
    });

    const mailOptions = {
        from: "riskypal32@gmail.com",
        to:`${email}`,
        subject: `${subject}`,
        text: `You have a new form submission:
             Description: ${description}`,
      };
    

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Email Error:", error);
    throw error;
  }
};

module.exports = sendEmail;

