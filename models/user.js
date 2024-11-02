const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  termsAccepted: { type: Boolean, default: false },
  specialization: { type: String },
  experience: { type: String },
  association: { type: String },
  location: {type: String}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
