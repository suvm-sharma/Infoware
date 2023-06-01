const mongoose = require('mongoose');
const validator = require('validator');

const primaryEmergencyContactSchema = new mongoose.Schema({
  primaryEmergencyContact: {
    type: String,
    required: [true, 'please provide your Primary Emergency Contact'],
  },
  phoneNumber: {
    type: Number,
    required: [true, 'please provide your Phone Number'],
  },
  relationship: {
    type: String,
    required: [true, 'please provide your Relation'],
  },
});

const secondaryEmergencyContactSchema = new mongoose.Schema({
  secondaryEmergencyContact: {
    type: String,
    required: [true, 'please provide your secondary Emergency Contact'],
  },
  phoneNumber: {
    type: Number,
    required: [true, 'please provide your Phone Number'],
  },
  relationship: {
    type: String,
    required: [true, 'please provide your Relation'],
  },
});

// Employee schema
const employeeSchema = new mongoose.Schema({
  employeeFullName: {
    type: String,
    required: [true, 'please enter your Full Name!'],
  },
  jobTitle: {
    type: String,
    required: [true, 'please enter your Job Title'],
  },
  phoneNumber: {
    type: Number,
    required: [true, 'please provide your Phone Number'],
    // validate: [validator.isEmail, 'please provide a valid email'],
  },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'please provide a valid email'],
  },
  address: {
    type: String,
    required: [true, 'please provide your Address'],
  },
  city: {
    type: String,
    required: [true, 'please provide your city Name'],
  },
  state: {
    type: String,
    required: [true, 'please provide your state Name'],
  },
  primaryEmergencyContact: primaryEmergencyContactSchema,
  secondaryEmergencyContact: secondaryEmergencyContactSchema,
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
