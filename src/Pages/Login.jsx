import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='flex h-[100%] w-[100%] border-2 justify-center items-center border-slate-200 rounded-2xl p-1 shadow-xl'>
        <div className='w-[30%] h-[50%] border-2 pt-5 rounded-2xl border-slate-100 shadow-2xl shadow-slate-400'>
            <div className='flex w-[100%] h-[20%] justify-center'>
                <div className='flex justify-center items-center rounded-[50%] border-2 border-slate-50 w-[18%] h-[100%] bg-blue-400'>
                    logo
                </div>
            </div>
            <div className='flex w-[100%] h-[20%] justify-center'>
                <h1 className='text-xl'>Welcome  to Inventory management</h1>
            </div>
            <div className='flex flex-col w-[100%] h-[30%]'>
                <input type="text" placeholder='Name' className='border-2 rounded-lg mx-2 my-1 h-[50%] px-2 border-slate-200 shadow-blue-300 focus:shadow-lg focus:outline-none focus:border-x-0 focus:border-t-0  focus:border-blue-400 transition-all duration-500' />
                <input type="text" placeholder='Password' className='border-2 rounded-lg mx-2 my-1 h-[50%] px-2 border-slate-200 shadow-blue-300 focus:shadow-lg focus:outline-none focus:border-x-0 focus:border-t-0  focus:border-blue-400 transition-all duration-500'/>
            </div>
            <div className='flex flex-col w-[100%] h-[30%]'>
                <button className='rounded-lg mx-auto w-[60%]  h-[40%] px-2 m-5 bg-blue-400 hover:bg-slate-400 hover:text-white hover:shadow-lg shadow-slate-600 transition-all duration-700'><Link to="/Home">Login</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Login