import mongoose from 'mongoose';

const bankDetailSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  employment: {
    type: String,
    required: true,
  },
});

const BankDetail = mongoose.model('BankDetail', bankDetailSchema);

export default BankDetail;
