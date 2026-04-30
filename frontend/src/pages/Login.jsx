import React from 'react';
import { motion } from 'framer-motion';
import loginImage from '../assets/login-image.svg';

const Login = () => {
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-10'>

      {/* TOP: WELCOME TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center text-2xl sm:text-3xl font-bold  text-linear-to-t from-green-400 to-green-700 mb-10'
      >
        Welcome to Shahjalal University School and College
      </motion.h1>


      {/* BOTTOM: IMAGE + LOGIN */}
      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10'>

        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='hidden md:flex md:w-1/2 justify-center'
        >
          <img
            src={loginImage}
            alt='Login'
            className='w-full max-w-md object-contain'
          />
        </motion.div>

        {/* RIGHT: LOGIN CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='w-full md:w-1/2 max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10'
        >
          <div className='space-y-6'>

            <div>
              <p className='text-sm uppercase text-green-600 font-semibold mb-2'>
                Log in user account
              </p>
              <h2 className='text-2xl font-bold text-slate-900'>
                Access your account
              </h2>
            </div>

            <form className='space-y-5'>
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-slate-700 mb-2'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100'
                />
              </div>

              <button
                type='button'
                className='w-full rounded-2xl bg-green-600 px-4 py-3 text-white font-semibold hover:bg-green-700 transition'
              >
                Login
              </button>

              <div className='flex justify-between text-sm text-slate-600'>
                <a href='#' className='hover:underline text-red-500'>
                  Forgot password?
                </a>
                <a href='#' className='hover:underline text-red-500'>
                  Reset password
                </a>
              </div>
            </form>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Login;