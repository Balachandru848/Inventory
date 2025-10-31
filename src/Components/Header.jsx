import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

function Header() {
     
    const [toggle,settoggle] = useState(false);
    const name = JSON.parse(localStorage.getItem("userData"))
    
    const click = () =>{
        settoggle(!toggle)
    }

    return (
        <div className="flex border-b-2 border-blue-200 p-4 rounded-tl-xl rounded-tr-xl h-[10%] relative">
            <div className="flex-1 flex justify-items-start items-center ">
                {/* <img src="" alt="" /> */}
                <p className='text-2xl px-2'>SBJ</p>
            </div>
            <div className="flex-3 flex justify-center items-center max-[600px]:hidden">
                <ul className="flex text-slate-500">
                    <li className='px-2 hover:text-blue-400'><Link to="/Home">Dashboard</Link></li>
                    <li className='px-2 hover:text-blue-400'><Link to="/Sales">Sales</Link></li>
                    <li className='px-2 hover:text-blue-400'><Link to="/Inventory">Inventory</Link></li>
                    <li className='px-2 hover:text-blue-400'><Link to="/Purchase">Purchase</Link></li>
                    <li className='px-2 hover:text-blue-400'><Link to="/Customer">Customers</Link></li>
                    <li className='px-2 hover:text-blue-400'><Link to="/Report">Report</Link></li>
                    <li className='px-2 hover:text-blue-400'><Link to="/Settings">Settings</Link></li>
                </ul>
            </div>
            <div className="flex justify-end items-center flex-1 ">
                <p>{name[0].name}</p>
                {/* <img src="" alt="" /> */}
                <button className={"h-[20px] px-2 hidden max-[600px]:flex "}onClick={click}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className={`absolute mt-[10%] border-2 border-slate-200 right-0 rounded-2xl min-[600px]:hidden filter backdrop-blur-2xl p-2 shadow-md transition
                            ${toggle ? "opacity-100 scale-100 translate-y-0 duration-[2000ms] flex " : "opacity-0 scale-95 -translate-y-5 pointer-events-none duration-[2000ms]"}`}>
                <ul className='rounded-2xl max-[600px]:text-[12px] text-center'>
                    <li className='border-2 border-slate-300 p-1 rounded-2xl m-0.5'><Link to="/Home">Dashboard</Link></li>
                    <li className='border-2 border-slate-300 p-1 rounded-2xl m-0.5'><Link to="/Sales">Billing</Link></li>
                    <li className='border-2 border-slate-300 p-1 rounded-2xl m-0.5'><Link to="/Inventory">Inventory</Link></li>
                    <li className='border-2 border-slate-300 p-1 rounded-2xl m-0.5'><Link to="/Purchase">Purchase</Link></li>
                    <li className='border-2 border-slate-300 p-1 rounded-2xl m-0.5'><Link to="/Customer">Customers</Link></li>
                    <li className='border-2 border-slate-300 p-1 rounded-2xl m-0.5'><Link to="/Report">Report</Link></li>
                    <li className='border-2 border-slate-300 p-1 rounded-2xl m-0.5'><Link to="/Report">Settings</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header