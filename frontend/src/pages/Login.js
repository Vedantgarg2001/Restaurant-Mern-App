import React, { useState } from 'react';
import loginSignImage from "../assests/login-animation.gif";
import { BiShow, BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  
  const userData = useSelector(state => state.user);

  console.log(userData);  // Log the user data
  const dispatch = useDispatch();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      try {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        const dataRes = await fetchData.json();
        console.log(dataRes);  // Log the server response

        if (dataRes.alert) {
          dispatch(loginRedux(dataRes));
          toast.success(dataRes.message);
          navigate("/");
        } else {
          toast.error(dataRes.message);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Login Error:", error);
      }
    } else {
      toast.error("Please enter the required fields");
    }
  };

  return (
    <div className='p-2 min-h-screen bg-green-50 flex items-center justify-center md:p-4'>
      <Toaster />
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md cursor-pointer'>
          <img src={loginSignImage} className='w-full' alt="Login Animation" />
        </div>
        <form className='w-full py-2 flex flex-col' onSubmit={handleSubmit}>
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
          <div className='flex bg-slate-200 px-2 py-1 pt-1 mb-2 focus-within:outline focus-within:outline-black'>
            <input
              type={showPassword ? "text" : "password"}
              id='password'
              name='password'
              className='w-full bg-slate-200 outline-none'
              value={data.password}
              onChange={handleOnChange}
            />
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button type='submit' className='w-1/2 bg-black text-white rounded-full mt-4 py-1 m-auto'>
            Login
          </button>
        </form>
        <p>New User? <Link to='/signup' className='text-red-500 underline'>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
