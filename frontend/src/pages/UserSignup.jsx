import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [Lastname, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('')
    setPassword('')
    setName("")
    setLastName('')
    setUserData({
      username:{
        name:name,
        lastname:Lastname
      },
      email: Email,
      password: Password,
    })
    console.log(userData);
    
  }
  return (
    <div>
      <div className="p-7 flex h-screen flex-col justify-between">
      <div>
      <img
            className="w-16 mb-10"
            src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
            alt=""
          />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className='flex gap-4 mb-6'>
          <input
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  test-lg placeholder:text-base"
            required
            type="text"
            placeholder="First name"
          />
          <input
           value={Lastname}
           onChange={(e)=>{
             setLastName(e.target.value)
           }}
            className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border test-lg placeholder:text-base"
            required
            type="text"
            placeholder="Last name"
          />
          </div>
          <h3 className="test-lg font-medium mb-2">What's your email</h3>
          <input
           value={Email}
           onChange={(e)=>{
             setEmail(e.target.value)
           }}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full test-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="test-lg font-medium mb-2">Enter your Password</h3>
          <input
           value={Password}
           onChange={(e)=>{
             setPassword(e.target.value)
           }}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full test-lg placeholder:text-base"
            required
            type="password"
            placeholder="Enter password"
          />
          <button className="bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:test-lg">
            Login
          </button>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/login " className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
         Policy</span> and <span className='underline'>Terms of Service apply.</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup
