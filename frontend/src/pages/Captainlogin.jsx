import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CaptainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <img
            className="w-20 mb-3"
            src="https://pngimg.com/d/uber_PNG24.png"
            alt=""
          />
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="Enter password"
          />
          <button className="bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Join a fleet?
            <Link to="/captain-signup " className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] text-[#fff] flex items-center 
          justify-center font-semibold mb-5 rounded px-4 py-2  
          w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin
