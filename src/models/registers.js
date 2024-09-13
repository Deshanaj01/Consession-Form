const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  birthDate: { type: Date, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  category: { type: String, required: true },
  railwayPassPeriod: { type: String, required: true },
  classForRailwayPass: { type: String, required: true },
  railwayType: { type: String, required: true },
  from: { type: String, required: true },
  dateOfIssue: { type: Date, required: true },
  dateOfExpiry: { type: Date, required: true },
  seasonTicketNumber: { type: Number, required: true },
  studentNumber: { type: Number, required: true },
  collectionDate: { type: Date, required: true }
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
