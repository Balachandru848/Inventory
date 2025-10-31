import React, { useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

function Settings() {
    const [adduser,setadduser]=useState(false)
    const [name,setname]=useState("")
    const [role,setrole]=useState("Sales Person")
    const [password,setpassword]=useState("")

    const user = JSON.parse(localStorage.getItem("User")) || [];
    console.log(user);
    
    const add = () => {
        const newuser = {
            Name : name,
            Role : role,
            Password : password
        }
        user.push(newuser)
        localStorage.setItem("User",JSON.stringify(user))
        alert("User added successfully")
        window.location.reload();
    }

    const editPassword = (index) => {
        const newPassword = prompt("Enter new password:");
        if (newPassword) {
            user[index].Password = newPassword;
            localStorage.setItem("User", JSON.stringify(user));
            alert("Password updated successfully");
        }
    }

    const remove = (index) => {
        const confirm = prompt("Enter delete:");
        if(confirm === "DELETE" || confirm === "delete"){
            user.splice(index, 1);
            localStorage.setItem("User",JSON.stringify(user))
            window.location.reload()
        }
    }

  return (
    <div className='border-2 border-slate-200 rounded-2xl p-1 shadow-xl'>
        <Header/>
        <Title title={"Settings"}/>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex w-[60%] border-2 mb-4 rounded-2xl border-slate-300 shadow-2xl max-[600px]:w-[80%]'>
                <div className='flex w-20 h-20 border-2 m-2 p-2 items-center justify-center rounded-xl  border-blue-300 bg-blue-300 max-[600px]:h-15'>
                    <FontAwesomeIcon icon={faUser} className='text-[300%] max-[600px]:text-[200%]'/>
                </div>
                <div className='flex w-[100%] h-20 justify-between px-4 items-center my-2 text-xl max-[600px]:flex-col max-[600px]:items-baseline max-[600px]:text-lg max-[600px]:h-15'>
                    <h1>Name</h1>
                    <h1>Role</h1>   
                </div>
            </div>
            <div className='flex flex-col w-[60%] h-20 border-2 mb-4 px-2 rounded-xl  border-slate-300 shadow-2xl max-[600px]:w-[80%]'>
                <h1 className='text-xl py-2 max-[600px]:text-lg'>Data-backup</h1>
                <div className='flex border-2 h-3 rounded-2xl  border-slate-300'>
                    <div className='flex w-[60%] bg-blue-400 rounded-2xl'></div>
                </div>
                <div className='flex'>
                    <div className='flex w-[60%] justify-end text-sm max-[600px]:text-[10px]'>60%</div>
                </div>
            </div>
            <div className='flex flex-col w-[60%]  border-2 mb-4 px-2 rounded-xl  border-slate-300 shadow-2xl max-[600px]:w-[90%]'>
                <h1 className='text-xl py-2 max-[600px]:text-lg'>Users</h1>
                <table className='border-2 rounded-2xl border-separate w-full  border-slate-300 text-l max-[600px]:text-sm '>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Password</th>
                        <th>delete</th>
                    </tr>
                    {user.map((item,index)=>{
                        return(<tr className='text-center '>
                            <td>{index+1}</td>
                            <td>{item.Name}</td>
                            <td>{item.Role}</td>
                            <td ><button className='hover:text-blue-300 transition-all duration-300' onClick={()=>{editPassword(index)}}>Edit</button></td>
                            <td className='hover:text-red-500' onClick={()=>{remove(index)}}>delete</td>
                        </tr>)
                    })}
                </table>

                <div className={`flex flex-col justify-center items-center transition-all duration-1000 
                    ${adduser ? " " : "hidden"}`}>
                    <div className={`flex justify-between w-[40%] border-2 p-2 m-2 rounded-xl border-slate-400`}>
                        <div className='flex flex-col justify-between w-[40%]'>
                            <label htmlFor="name" className='my-1'>Name :</label>
                            <label htmlFor="role" className='my-1'>Role :</label>
                            <label htmlFor="password" className='my-1'>Password :</label>
                        </div>
                        <div className='flex flex-col justify-between w-[60%]'>
                            <input type="text" className='border-2 my-1 rounded-sm p-1 border-slate-400 focus:outline-none'onChange={(e)=>{setname(e.target.value)}}/>
                             <select name="role" id="" className='border-2  my-1 rounded-sm p-1 border-slate-400 focus:outline-none' onChange={(e)=>{setrole(e.target.value)}}>
                                <option value="Sales Person">Sales Person</option> 
                                <option value="Inventory manager">Inventory Manager</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <input type="password" className='border-2 my-1 rounded-sm p-1 border-slate-400 focus:outline-none' onChange={(e)=>{setpassword(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='flex justify-around w-[40%]'>
                        <button className='w-[30%] bg-blue-400 text-slate-100 rounded-sm hover:bg-slate-300 hover:text-black transition-all duration-700' onClick={()=>{add()}}>Save</button>
                        <button className='w-[30%] bg-red-400 text-slate-100 rounded-sm hover:bg-slate-300 hover:text-black transition-all duration-700'>Cancel</button>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-[80%] mx-auto my-2 mt-4 h-8 border-2 text-xl bg-blue-400 text-slate-100 rounded-xl hover:bg-slate-300 hover:text-black transition-all duration-700'>
                    <button onClick={()=>{setadduser(!adduser)}}>Add-user</button>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-[60%] h-10 border-2 mb-4 px-2 text-xl bg-blue-400 text-slate-100 rounded-xl hover:bg-red-500 transition-all duration-700 max-[600px]:w-[80%]'>
                <button><Link to="/Login">Logout</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Settings