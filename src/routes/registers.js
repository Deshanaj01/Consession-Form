const express = require('express');
const router = express.Router();
const Register = require('../models/registers');

const convertToDate = (dateString) => {
  const [day, month, year] = dateString.split('-');
  return new Date(`${year}-${month}-${day}`);
};

router.post('/', async (req, res) => {
  const {
    fullName,
    email,
    address,
    phoneNumber,
    birthDate,
    branch,
    year,
    category,
    railwayPassPeriod,
    classForRailwayPass,
    railwayType,
    from,
    dateOfIssue,
    dateOfExpiry,
    seasonTicketNumber,
    studentNumber,
    collectionDate
  } = req.body;

  if (!fullName || !email || !address || !phoneNumber || !birthDate || !branch || !year || !category || !railwayPassPeriod || !classForRailwayPass || !railwayType || !from || !dateOfIssue || !dateOfExpiry || !seasonTicketNumber || !studentNumber || !collectionDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newRegister = new Register({
      fullName,
      email,
      address,
      phoneNumber,
      birthDate: convertToDate(birthDate),
      branch,
      year,
      category,
      railwayPassPeriod,
      classForRailwayPass,
      railwayType,
      from,
      dateOfIssue: convertToDate(dateOfIssue),
      dateOfExpiry: convertToDate(dateOfExpiry),
      seasonTicketNumber,
      studentNumber,
      collectionDate: convertToDate(collectionDate)
    });

    await newRegister.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

module.exports = router;
