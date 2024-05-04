const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Handles registering a user with the system
const registerUser = async (req, res) => {
  try {

    const { fullName, email, userName, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
        fullName,
        email,
        userName,
        password: hashedPassword,
      });

      const token = jwt.sign({_id: newUser._id}, 'secretkey123', {
        expiresIn: '90d',
      });
      
      await newUser.save();

      res.status(200).json({ message: "User sign up successful!", token });
    } else {
      res.status(403).json({ message: "User with this email already exists!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Handles the login of a user to the system
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ error: "User not found!, try again...." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
        let loginMessage = "Successfully logged in!";
        const token = jwt.sign({ email: user.email }, "Your_Secret_Token", { expiresIn: '1h' });
        return res.status(200).json({ token, user, message: loginMessage });
    } else {
        return res.status(401).json({ error: "Your credentials are incorrect! Please Try Again.." });
    }

  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    registerUser,
    loginUser
};