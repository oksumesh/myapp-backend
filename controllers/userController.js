const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Create a new user with hashed password
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, termsAccepted, specialization, experience, association, location } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with hashed password
    const user = new User({
      name,
      email,
      password: hashedPassword,
      termsAccepted,
      specialization,
      experience,
      association,
      location
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
