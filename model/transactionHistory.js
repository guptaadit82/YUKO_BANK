import mongoose from 'mongoose';

const transactionHistorySchema = new mongoose.Schema({
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
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const TransactionHistory = mongoose.model('TransactionHistory', transactionHistorySchema);

export default TransactionHistory;
