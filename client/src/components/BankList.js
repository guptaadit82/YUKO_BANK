import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const BankList = () => {
  const [bankDetails, setBankDetails] = useState([]);

  useEffect(() => {
    fetchBankDetails();
  }, []);

  const fetchBankDetails = async () => {
    try {
      const response = await axios.get('/api/bank-details');
      setBankDetails(response.data);
    } catch (error) {
      console.error('Error fetching bank details:', error);
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
              <Link to="/add" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                Addaccount
              </Link>
            </li>
            <li>
              <Link to="/" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
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
      <h2 className="text-2xl font-bold  mt-10 mb-10">Bank Details</h2>
      {bankDetails.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">SL. No.</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">First Name</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Last Name</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Account Type</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Date of Birth</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Gender</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Address</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Phone</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Email</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Amount</th>
                <th className="px-4 py-2 text-left text-gray-500 font-medium uppercase tracking-wider">Employment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
  {bankDetails.map((detail, index) => (
    <tr key={detail._id}>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">
        <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
        
      </td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.firstName}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.lastName}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.accountType}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.DOB}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.gender}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.address}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.phone}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.email}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.amount}</td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900">{detail.employment}</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      ) : (
        <p>No bank details found.</p>
      )}
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

export default BankList;
