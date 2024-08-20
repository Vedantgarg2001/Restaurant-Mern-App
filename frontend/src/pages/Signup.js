import React, { useState } from 'react';
import loginSignImage from "../assests/login-animation.gif";
import { BiShow, BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { toast, Toaster } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: ""
  });

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await ImagetoBase64(file);
    setData((prev) => {
      return {
        ...prev,
        image: base64
      };
    });
  };

  const handleRemoveProfileImage = () => {
    setData((prev) => {
      return {
        ...prev,
        image: ""
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          const dataRes = await response.json();
          toast(dataRes.message);
          if (dataRes.alert) {
            navigate("/login");
          }
        } catch (error) {
          toast.error("An error occurred. Please try again.");
        }
      } else {
        toast.error("Password and confirm password do not match");
      }
    } else {
      toast.error("Please enter all required fields");
    }
  };

  return (
    <div className='min-h-screen p-3 bg-green-50 md:p-4 flex items-center justify-center'>
      <Toaster />
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        <div className='relative w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md cursor-pointer'>
          <img src={data.image ? data.image : loginSignImage} className='w-full h-full' alt="Profile" />
          <label htmlFor='profileImage' className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center'>
            <p className='text-sm p-1 text-white cursor-pointer' onClick={data.image ? handleRemoveProfileImage : null}>
              {data.image ? "Remove" : "Upload"}
            </p>
            {!data.image && <input type='file' id='profileImage' className='hidden' accept='image/*' onChange={handleUploadProfileImage} />}
          </label>
        </div>
        <form className='w-full py-2 flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='pt-1 mb-2 w-full bg-slate-200 px-2 py-1 focus-within:outline-black'
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            className='pt-1 mb-2 w-full bg-slate-200 px-2 py-1'
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            className='pt-1 mb-2 w-full bg-slate-200 px-2 py-1'
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            className='pt-1 w-full bg-slate-200 px-2 py-1'
            value={data.password}
            onChange={handleOnChange}
          />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <div className='flex bg-slate-200 px-2 py-1 pt-1 mb-2 focus-within:outline focus-within:outline-black'>
            <input
              type={showPassword ? "text" : "password"}
              id='confirmPassword'
              name='confirmPassword'
              className='w-full bg-slate-200 outline-none'
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button type='submit' className='w-1/2 bg-black text-white rounded-full mt-4 py-1 m-auto'>
            Sign Up
          </button>
        </form>
        <p>Already have an account? <Link to='/login' className='text-red-500 underline'>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
