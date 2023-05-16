import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Balance = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('/api/balance', {
          params: { phoneNumber },
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
        setBalance('Failed to fetch balance');
      }
    };

    if (phoneNumber) {
      fetchBalance();
    }
  }, [phoneNumber]);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
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
              <Link to="/transaction" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                Transactions
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
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Check Balance</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="phoneNumber" className="mr-2">
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="border border-gray-300 rounded-md px-2 py-1"
        />
      </div>
      <div>
        {balance ? (
          <p className="text-green-500">Balance: {balance}</p>
        ) : (
          <p className="text-red-500">No balance found.</p>
        )}
      </div>
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

export default Balance;
