import React, { useState } from 'react';
import axios from 'axios';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Transaction = () => {
  const [senderFirstName, setSenderFirstName] = useState('');
  const [senderLastName, setSenderLastName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [receiverFirstName, setReceiverFirstName] = useState('');
  const [receiverLastName, setReceiverLastName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSenderFirstNameChange = (event) => {
    setSenderFirstName(event.target.value);
  };

  const handleSenderLastNameChange = (event) => {
    setSenderLastName(event.target.value);
  };

  const handleSenderPhoneChange = (event) => {
    setSenderPhone(event.target.value);
  };

  const handleReceiverFirstNameChange = (event) => {
    setReceiverFirstName(event.target.value);
  };

  const handleReceiverLastNameChange = (event) => {
    setReceiverLastName(event.target.value);
  };

  const handleReceiverPhoneChange = (event) => {
    setReceiverPhone(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/transaction', {
        senderFirstName,
        senderLastName,
        senderPhone,
        receiverFirstName,
        receiverLastName,
        receiverPhone,
        amount,
      });

      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setError('Failed to perform transaction');
      setMessage('');
      console.error('Error performing transaction:', error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col h-screen">
      <nav className="bg-transparent py-4 border-b-2 border-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black font-bold text-2xl" style={{ marginLeft: '40px' }}>
            Yuko Bank 
          </h1>
          <ul className="flex space-x-4 py-2 px-5 text-1.5xl" style={{ marginright: '40px' }} >
            <li>
              <Link to="/profile" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/accounts" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                Accounts
              </Link>
            </li>
            <li>
              <Link to="/Balance" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                Balance
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                History
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Transaction</h2>
      {message && <p className="text-green-500 mb-2">{message}</p>}
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="senderFirstName" className="block">Sender First Name:</label>
            <input
              type="text"
              id="senderFirstName"
              value={senderFirstName}
              onChange={handleSenderFirstNameChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="senderLastName" className="block">Sender Last Name:</label>
            <input
              type="text"
              id="senderLastName"
              value={senderLastName}
              onChange={handleSenderLastNameChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="receiverFirstName" className="block">Receiver First Name:</label>
            <input
              type="text"
              id="receiverFirstName"
              value={receiverFirstName}
              onChange={handleReceiverFirstNameChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="receiverLastName" className="block">Receiver Last Name:</label>
            <input
              type="text"
              id="receiverLastName"
              value={receiverLastName}
              onChange={handleReceiverLastNameChange}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="senderPhone" className="block">Sender Phone:</label>
          <input
            type="text"
            id="senderPhone"
            value={senderPhone}
            onChange={handleSenderPhoneChange}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="receiverPhone" className="block">Receiver Phone:</label>
          <input
            type="text"
            id="receiverPhone"
            value={receiverPhone}
            onChange={handleReceiverPhoneChange}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Perform Transaction</button>
      </form>
    </div>
    <footer className="bg-transparent py-4">
        <div className="container mx-auto text-center text-black">
         <div className="flex justify-center items-center">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook-icon text-blue mr-4"
      >
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a
        href="https://twitter.com/login"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter-icon text-blue mr-4"
      >
        <FontAwesomeIcon icon={faTwitter}  size="2x"/>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-icon text-blue mr-4"
      >
        <FontAwesomeIcon icon={faInstagram}  size="2x"/>
      </a>
         </div>
                &copy; {new Date().getFullYear()} Yuko Bank. All rights reserved.
         </div>
      </footer>
    </div>
  );
  
  
};
            
export default Transaction;
            
