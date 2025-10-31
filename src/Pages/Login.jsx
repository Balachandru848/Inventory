import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
  const user = JSON.parse(localStorage.getItem("User"))
  const [name,setname] = useState("")
  const [password,setpassword]= useState("")
  let index = -1
  const data = JSON.parse(localStorage.getItem("userData"))|| [];
//   alert(index)
    

  const navigate = useNavigate()
  const check = () =>{
    if(name === "" || password === ""){
        alert("Enter the Missing Field")
    }else{
        navigate('/Home')
        const nameCheck = user.some(obj => obj.Name.trim() === name.trim())
        const passwordCheck = user.some(obj => obj.Password.trim() === password.trim())
        if(nameCheck && passwordCheck){
            // if(data.length === 0){
                index = user.findIndex(obj => obj.Name === name)
                const log = {
                    name : name,
                    role : user[index].Role
                }
                localStorage.setItem("userData",JSON.stringify([log]))
            navigate('/Home')
        }else{
            alert("password or name is worng");
        }
    }
  }
  return (
    <div className='flex h-[100%] w-[100%] border-2 justify-center items-center border-slate-200 rounded-2xl p-1 shadow-xl'>
        <div className='w-[30%] h-[50%] border-2 pt-5 rounded-2xl border-slate-100 shadow-2xl shadow-slate-400 max-[600px]:w-[80%]'>
            <div className='flex w-[100%] h-[20%] justify-center'>
                <div className='flex justify-center items-center rounded-[50%] border-2 border-slate-50 w-[18%] h-[100%] bg-blue-400'>
                    logo
                </div>
            </div>
            <div className='flex w-[100%] h-[20%] justify-center'>
                <h1 className='text-xl text-center'>Welcome  to Inventory management</h1>
            </div>
            <div className='flex flex-col w-[100%] h-[30%]'>
                <input type="text" placeholder='Name' className='border-2 rounded-lg mx-2 my-1 h-[50%] px-2 border-slate-200 shadow-blue-300 focus:shadow-lg focus:outline-none focus:border-x-0 focus:border-t-0  focus:border-blue-400 transition-all duration-500' onChange={(e)=>{setname(e.target.value)}}/>
                <input type="text" placeholder='Password' className='border-2 rounded-lg mx-2 my-1 h-[50%] px-2 border-slate-200 shadow-blue-300 focus:shadow-lg focus:outline-none focus:border-x-0 focus:border-t-0  focus:border-blue-400 transition-all duration-500' onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <div className='flex flex-col w-[100%] h-[30%]'>
                <button className='rounded-lg mx-auto w-[60%]  h-[40%] px-2 m-5 bg-blue-400 hover:bg-slate-400 hover:text-white hover:shadow-lg shadow-slate-600 transition-all duration-700' onClick={check}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login