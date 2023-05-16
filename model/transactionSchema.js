import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  senderFirstName: {
    type: String,
    required: true,
  },
  senderLastName: {
    type: String,
    required: true,
  },
  senderPhone: {
    type: String,
    required: true,
  },
  receiverFirstName: {
    type: String,
    required: true,
  },
  receiverLastName: {
    type: String,
    required: true,
  },
  receiverPhone: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const TransactionDetail = mongoose.model('TransactionDetail', transactionSchema);

export default TransactionDetail;
