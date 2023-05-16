import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate'
import { resetPassword } from '../helper/helper'
import { useAuthStore } from '../store/store';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate } from 'react-router-dom';
import useFetch from '../hooks/fetch.hook'

import styles from '../styles/Username.module.css';

export default function Reset() {

  const { username } = useAuthStore(state => state.auth);
  const navigate = useNavigate();
  const [{ isLoading , status, serverError }] = useFetch('createResetSession')

  const formik = useFormik({
    initialValues : {
      password : 'admin@123',
      confirm_pwd: 'admin@123'
    },
    validate : resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      let resetPromise = resetPassword({ username, password: values.password })

      toast.promise(resetPromise, {
        loading: 'Updating...',
        success: <b>Reset Successfully...!</b>,
        error : <b>Could not Reset!</b>
      });

      resetPromise.then(function(){ navigate('/password') })

    }
  })


  if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>
  if(status && status !== 201) return <Navigate to={'/password'} replace={true}></Navigate>

  return (
    <div className="container mx-auto">
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


      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{ width : "50%"}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter new password.
            </span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='New Password' />
                  <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="text" placeholder='Repeat Password' />
                  <button className={styles.btn} type='submit'>Reset</button>
              </div>

          </form>

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
  )
}
