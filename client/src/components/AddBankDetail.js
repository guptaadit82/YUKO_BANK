import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AddBankDetail = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    DOB: '',
    gender: '',
    address: '',
    phone: '',
    name: '',
    email: '',
    accountType: '',
    amount: '',
    employment: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData); 

    try {
      const response = await axios.post('/api/bank-details', formData);
      setMessage(response.data.message);
      setError('');
      setFormData({
        firstName: '',
        lastName: '',
        DOB: '',
        gender: '',
        address: '',
        phone: '',
        name: '',
        email: '',
        accountType: '',
        amount: '',
        employment: '',
      });
    } catch (error) {
      setError('Failed to add bank detail');
      setMessage('');
      console.error('Error adding bank detail:', error);
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
    <div className="bg-gray-100 mt-10 mb-10 w-3/5 mx-auto p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl mb-4 font-bold text-gray-800">Add Bank Detail</h2>
      {message && <p className="text-green-500 mb-2">{message}</p>}
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="text-gray-700 font-medium">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="text-gray-700 font-medium">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div>
          <label htmlFor="DOB" className="text-gray-700 font-medium">Date of Birth:</label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            required
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="gender" className="text-gray-700 font-medium">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
        <label htmlFor="address" className="text-gray-700 font-medium">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-gray-700 font-medium">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="name" className="text-gray-700 font-medium">Bank Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-gray-700 font-medium">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="accountType" className="text-gray-700 font-medium">Account Type:</label>
        <select
          id="accountType"
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          required
          className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select Account Type</option>
          <option value="savings">Savings</option>
          <option value="current">Current</option>
          <option value="loan">Loan</option>
        </select>
      </div>
      <div>
        <label htmlFor="amount" className="text-gray-700 font-medium">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
  <label htmlFor="employment" className="text-gray-700 font-medium">Employment:</label>
  <select id="employment" name="employment" value={formData.employment} onChange={handleChange} className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
    <option value="">Select Employment</option>
    <option value="student">Student</option>
    <option value="govt-emp">Government Employee</option>
    <option value="business">Business</option>
    <option value="other">Other</option>
  </select>
</div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Add Bank Detail
        </button>
      </div>
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

export default AddBankDetail;

         
