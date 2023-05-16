import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import BankDetail from './model/bankDetail.js';
import TransactionHistory from './model/transactionHistory.js';


import mongoose from 'mongoose';

const app = express();

const mongoURI = "mongodb+srv://happy8:happy8@bankdb.ovxwozg.mongodb.net/";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



  /** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST endpoint to add a bank detail
app.post('/api/bank-details', async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        DOB,
        gender,
        address,
        phone,
        name,
        email,
        accountType,
        amount,
        employment,
      } = req.body;
  
      const newBankDetail = new BankDetail({
        firstName,
        lastName,
        DOB,
        gender,
        address,
        phone,
        name,
        email,
        accountType,
        amount,
        employment,
      });

    await newBankDetail.save();

    res.status(201).json({ message: 'Bank detail added successfully' });
  } catch (error) {
    console.error('Error adding bank detail:', error);
    res.status(500).json({ message: 'Failed to add bank detail' });
  }
});

// POST endpoint to perform a transaction
app.post('/api/transaction', async (req, res) => {
  try {
    const { senderFirstName, senderLastName, senderPhone, receiverFirstName, receiverLastName, receiverPhone, amount } = req.body;

    console.log('Transaction initiated:', {
      senderFirstName,
      senderLastName,
      senderPhone,
      receiverFirstName,
      receiverLastName,
      receiverPhone,
      amount,
    });

    // Convert amount to a number
    const transactionAmount = parseFloat(amount);

    if (isNaN(transactionAmount)) {
      throw new Error('Invalid transaction amount');
    }

    // Perform validation or any additional checks here

    // Find the sender's bank detail
    const senderBankDetail = await BankDetail.findOne({
      firstName: senderFirstName,
      lastName: senderLastName,
      phone: senderPhone,
    });

    if (!senderBankDetail) {
      throw new Error('Sender bank detail not found');
    }

    // Find the receiver's bank detail
    const receiverBankDetail = await BankDetail.findOne({
      firstName: receiverFirstName,
      lastName: receiverLastName,
      phone: receiverPhone,
    });

    if (!receiverBankDetail) {
      throw new Error('Receiver bank detail not found');
    }

    // Check if the sender has sufficient balance
    if (senderBankDetail.amount < transactionAmount) {
      throw new Error('Insufficient balance');
    }

    // Perform the transaction by updating the sender and receiver balances
    senderBankDetail.amount -= transactionAmount;
    receiverBankDetail.amount += transactionAmount;

    // Save the updated bank details
    await senderBankDetail.save();
    await receiverBankDetail.save();
    
    const transactionHistory = new TransactionHistory({
      senderFirstName,
      senderLastName,
      senderPhone,
      receiverFirstName,
      receiverLastName,
      receiverPhone,
      amount: transactionAmount,
      timestamp: new Date(),
    });
    // Save the transaction history document
    await transactionHistory.save();

    console.log('Transaction completed successfully');
    


    res.status(200).json({ message: 'Transaction successful' });
  } catch (error) {
    console.error('Error performing transaction:', error.message);

    res.status(500).json({ message: 'Failed to perform transaction' });
  }
});




// GET endpoint to fetch transaction history
app.get('/api/transaction-history', async (req, res) => {
  try {
    const transactionHistory = await TransactionHistory.find();
    res.status(200).json(transactionHistory);
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    res.status(500).json({ message: 'Failed to fetch transaction history' });
  }
});




// GET endpoint to fetch all bank details
app.get('/api/bank-details', async (req, res) => {
  try {
    const bankDetails = await BankDetail.find();

    res.status(200).json(bankDetails);
  } catch (error) {
    console.error('Error fetching bank details:', error);
    res.status(500).json({ message: 'Failed to fetch bank details' });
  }
});










const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/** api routes */
app.use('/api', router)









/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})

