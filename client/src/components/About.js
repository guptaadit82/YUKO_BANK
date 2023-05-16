
import React from 'react';
import avatar from '../assets/bg_abt.jpg';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className="container mx-auto flex flex-col h-screen">
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
        <div className="container mx-auto flex justify-between">
          <div className="w-1/3">
            <img src={avatar} alt="avatar" className="w-full" />
          </div>
          <div className="w-2/3 px-4 ml-20">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="text-gray-600">Yuko Bank is a trusted financial institution committed to providing exceptional banking services to its customers. With a strong emphasis on customer satisfaction, Yuko Bank offers a wide range of products and services tailored to meet the diverse needs of individuals and businesses. As a customer of Yuko Bank, you can expect competitive interest rates, flexible loan options, and convenient banking solutions. With a solid reputation for reliability and integrity, Yuko Bank strives to build long-lasting relationships with its customers by delivering personalized financial solutions and excellent customer support. Experience the difference with Yuko Bank and take control of your financial future.we prioritize security and confidentiality, implementing cutting-edge technology and stringent measures to safeguard your financial information and protect against fraud, giving you peace of mind while conducting your banking transactions.With our user-friendly online banking platform, managing your finances has never been easier. Whether you're checking your account balance, transferring funds, or paying bills, Yuko Bank's intuitive interface ensures a seamless and hassle-free banking experience. </p>
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
}

export default About;
