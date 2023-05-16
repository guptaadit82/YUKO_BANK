import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../assets/bg_co.jpg';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    // Contact details
    const contactDetails = [
      {
        label: 'Address',
        value: '123 Main St, City, Country',
      },
      {
        label: 'Email',
        value: 'info@example.com',
      },
      {
        label: 'Phone',
        value: '+1 123-456-7890',
      },
    ];
  
    return (
      <div className="container mx-auto flex flex-col h-screen">
          {/* Navbar code here */}
          <nav className="bg-transparent py-4 border-b-2 border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-black font-bold text-2xl" style={{ marginLeft: '40px' }}>
                Yuko Bank 
              </h1>
              <ul className="flex space-x-4 py-2 px-5 text-1.5xl" style={{ marginright: '40px' }} >
                <li>
                  <Link to="/" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-black hover:text-green-500" style={{ marginRight: '25px' }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
    
  
        <div className="flex-grow flex justify-center items-center">
          <div className="container mx-auto flex justify-between items-center">
            <div className="w-1/2 pr-8">
              <img src={avatar} alt="avatar" className="w-full" />
            </div>
            <div className="w-2/3 px-4 ml-20">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <ul className="text-gray-600">
                {contactDetails.map((contact, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{contact.label}: </span>
                    {contact.value}
                  </li>
                ))}
              </ul>
            </div>
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
  
  export default Contact;
