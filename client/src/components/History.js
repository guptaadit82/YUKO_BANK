import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const History = () => {
    const [transactionHistory, setTransactionHistory] = useState([]);
  
    useEffect(() => {
      fetchTransactionHistory();
    }, []);
  
    const fetchTransactionHistory = async () => {
      try {
        const response = await axios.get('/api/transaction-history');
        setTransactionHistory(response.data);
      } catch (error) {
        console.error('Error fetching transaction history:', error);
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
              <Link to="/transaction" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                Transactions
              </Link>
            </li>
            <li>
              <Link to="/Balance" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                Balance
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
      <div>
        <h2 className="text-3xl font-bold mb-4">Transaction History</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">Sender</th>
              <th className="py-2 px-4">Receiver</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactionHistory.map((transaction) => (
              <tr key={transaction._id}>
                <td className="py-2 px-4">{transaction.senderFirstName} {transaction.senderLastName}</td>
                <td className="py-2 px-4">{transaction.receiverFirstName} {transaction.receiverLastName}</td>
                <td className="py-2 px-4">{transaction.amount}</td>
                <td className="py-2 px-4">{transaction.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  
  export default History;
  