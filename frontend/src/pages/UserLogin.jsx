import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    setUserData('')
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <img className='w-16 mb-10' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
      required type="email" placeholder='email@example.com'/>
      <h3 className='text-lg font-medium mb-2'>Enter your Password</h3>
      <input 
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
      required type="password" placeholder='Enter password'/>
      <button className='bg-[#111] text-[#fff] font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
      <p className='text-center'>New Here? <Link to='/signup ' className='text-blue-600'>Create new Account</Link></p>
      </form>
      </div>
      <div>
        <button className='bg-[#10b461] text-[#fff] font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</button>
      </div>
    </div>
  )
}

export default UserLogin
