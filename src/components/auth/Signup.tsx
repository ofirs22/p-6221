import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';

export const Signup: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F5F5] p-4">
      <div className="w-[365px] bg-white rounded-[18px] shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] p-10">
        <div className="flex flex-col gap-4 text-right">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 
              className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              הרשמה
            </h1>
            <div className="w-[74px] h-[3px] bg-[#00BAFF] ml-auto" />
          </div>

          <div className="w-full h-px bg-[#D2D2D2] my-2" />

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="name" 
                className="text-[14px] text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                שם:
              </label>
              <input
                type="text"
                id="name"
                placeholder="שם"
                className="w-full h-[48px] px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF] input-right-placeholder"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              />
            </div>

            {/* Last Name Field */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="lastName" 
                className="text-[14px] text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                שם משפחה:
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="שם משפחה"
                className="input-right-placeholder w-full h-[48px] px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="phone" 
                className="text-[14px] text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                מספר טלפון:
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="מספר טלפון"
                className="input-right-placeholder w-full h-[48px] px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="email" 
                className="text-[14px] text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                אימייל:
              </label>
              <input
                type="email"
                id="email"
                placeholder="israelisraeli@gmail.com"
                className="input-right-placeholder w-full h-[48px] px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="password" 
                className="text-[14px] text-[#05172C]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                סיסמא:
              </label>
              <input
                type="password"
                id="password"
                placeholder="************"
                className="input-right-placeholder w-full h-[48px] px-5 border border-[#D2D2D2] rounded-lg text-[14px] text-[#05172C] focus:outline-none focus:border-[#00BAFF]"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px] mt-2 shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)]"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              הרשמה
            </button>

            <div className="w-full h-px bg-[#D2D2D2] my-2" />

            {/* Social Signup Buttons */}
            <button
              type="button"
              className="w-full h-[53px] border border-[#778080] text-[#778080] rounded-full font-semibold text-[20px] leading-[29px] flex items-center justify-center gap-2"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              <FaGoogle className="text-[13px]" />
              <span>הרשמה עם גוגל</span>
            </button>

            <button
              type="button"
              className="w-full h-[53px] border border-[#778080] text-[#778080] rounded-full font-semibold text-[20px] leading-[29px] flex items-center justify-center gap-2"
              style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
            >
              <FaApple className="text-[13px]" />
              <span>הרשמה עם אפל</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
