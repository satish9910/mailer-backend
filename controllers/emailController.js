const userEmail = require("../models/EmailListModel");
const sendEmail = require("../service/emailService")

const addMail = async (req, res) => {
  const { name, email } = req.body;
  try {
    let user = await userEmail.create({ name, email });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getEmail = async (req, res) => {
  try {
    const user = await userEmail.find();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const sendMail = async (req, res) => {
  const { subject, description ,email} = req.body;
  try {
    const info = await sendEmail(subject,description,email);
    res.json(info);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}

module.exports = { addMail, getEmail, sendMail };
