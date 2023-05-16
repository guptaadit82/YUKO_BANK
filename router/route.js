import { Router } from "express";
const router = Router();
import BankDetail from '../model/bankDetail.js';
/** import all controllers */
import * as controller from '../controllers/appController.js';
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser,controller.login); // login in app

/** GET Methods */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables


/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password


router.get('/balance', async (req, res) => {
    const { phoneNumber } = req.query;
  
    try {
      // Find the bank detail with the provided phone number
      const bankDetail = await BankDetail.findOne({ phone: phoneNumber });
  
      if (!bankDetail) {
        return res.status(404).json({ message: 'Phone number not found' });
      }
  
      const balance = bankDetail.amount;
      res.status(200).json({ balance });
    } catch (error) {
      console.error('Error fetching balance:', error);
      res.status(500).json({ message: 'Failed to fetch balance' });
    }
  });
// GET endpoint to fetch transaction history
router.get('/transaction-history', async (req, res) => {
  try {
    const transactionHistory = await TransactionHistory.find();
    res.status(200).json(transactionHistory);
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    res.status(500).json({ message: 'Failed to fetch transaction history' });
  }
});
 







  

export default router;