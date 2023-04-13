const {
  validtaeEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { generateToken } = require("../helpers/tokens");
const { sendemail } = require("../helpers/mailer");
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    ///VALIDATION
    if (!validtaeEmail(email)) {
      return res.status(400).json({
        message: "invalid email",
      });
    }

    if (!validateLength(first_name, 3, 20)) {
      return res.status(400).json({
        message: "first name length must be between 3 and 20",
      });
    }
    if (!validateLength(last_name, 3, 20)) {
      return res.status(400).json({
        message: "last name length must be between 3 and 20",
      });
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "Password length Must be between 6 charcters",
      });
    }

    ///CHECK EMAIL EXISTANCE
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message: "Email Already Exists",
      });
    }
    let username = first_name + last_name;
    let newUsername = await validateUsername(username);
    //HASH THE PASSWORD

    const HashedPassword = await bcrypt.hash(password, 12);
    ///  FOR COMPARING  console.log(await bcrypt.compare(password, HashedPassword));

    const user = await new User({
      first_name,
      last_name,
      email,
      password: HashedPassword,
      username: newUsername,
      bYear,
      bMonth,
      bDay,
      gender,
    });
    await user.save();
    const emailVerificationToken = generateToken({ id: user._id }, "30m");
    const loginToken = generateToken({ id: user._id }, "7d");
    const url = `localhost:3000/activate/${emailVerificationToken}`;

    sendemail(user.email, user.first_name, url);

    res.json(
      user //{
      //   id: user._id,
      //   email: user.email,
      //   username: user.username,
      //   verified: user.verified,
      //   token: loginToken,
      //   message:
      //     "Registered Successfully Please Check your Email and Activate Your Account",}
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activate = async (req, res) => {
  const { token } = req.body;
  const user = jwt.verify(token, process.env.TOKEN_JWT);

  const check = await User.findById(user.id);
  console.log(check.verified);
  if (check.verified) {
    return res.status(500).json({ message: "account already Activated" });
  } else {
    await User.findByIdAndUpdate(user.id, { verified: true });
    return res.status(500).json({ message: "account Activated Successfully" });
  }
};

exports.login = async (req, res) => {
  console.log("first");
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ message: "The Email You entered Doesn't Exist" });
  }
  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    return res
      .status(400)
      .json({ message: "Invalid Credentials Please Try Again" });
  }
  const loginToken = generateToken({ id: user._id }, "7d");
  res.json({
    id: user._id,
    email: user.email,
    username: user.username,
    verified: user.verified,
    token: loginToken,
    message: "Successful Login Welcome Home",
  });
};
