import React, { useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Customerbills from '../Components/Customerbills';
function Customer() {

  const [bills,setbills] = useState(false);

  const bill = () =>{
    setbills(!bills)
  }

  return (
    <div className='border-2 border-slate-200 rounded-2xl p-1 shadow-xl'>
        <Header/>
        <Title title={"Customer"}/>
        <div className='flex max-[800px]:flex-col'>
          <div className='flex flex-col w-[20%] max-[800px]:w-[100%]'>
            <div className='flex justify-center px-4'>
              <input type="text" className='   border-2 rounded-lg px-2 border-slate-400 rounded-tr-none rounded-br-none w-[90%] focus:outline-none'/>
              <button className='bg-slate-500 border-2 border-slate-400 border-l-0 rounded-r-lg round text-slate-50'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className={`flex flex-col p-4 max-[800px]:${bills?"hidden":""}`} >
              <div className='border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2 shadow-slate-400' onClick={bill}>
                <h1>Name</h1>
                <h1>Number</h1>
              </div>
              <div className='border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2 shadow-slate-400' onClick={bill}>
                <h1>Name</h1>
                <h1>Number</h1>
              </div>
              <div className='border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-4 shadow-slate-400' onClick={bill}>
                <h1>Name</h1>
                <h1>Number</h1>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[80%] max-[800px]:hidden'>
            <div className='border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2 text-xl shadow-slate-400'>
              <h1>Name</h1>
              <h1>Number</h1>
            </div>
            <div className=''>
              <div className='bg-blue-200 p-2 py-4 rounded-2xl border-zinc-50 border-2 shadow-2xl mb-4 shadow-slate-400 '>
                <h1 className='px-2 text-xl'>Bill.no : 1</h1>
                <div className=' flex justify-between border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2'>
                  <h1>Date:</h1>
                  <h1>Price-On-Date :</h1>
                </div>
                <div className='flex flex-col'>
                  <table className='text-center bg-slate-300'>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10'>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Charges</th>
                      <th>Subtotal</th>
                    </tr>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10 '>
                      <td>chain</td>
                      <td>12</td>
                      <td>120</td>
                      <td>1200</td>
                      <td>12333</td>
                    </tr>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10 '>
                      <th colSpan={4}>Total-Price</th>
                      <td>123</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className='bg-blue-200 p-2 py-4 rounded-2xl border-zinc-50 border-2 shadow-2xl mb-2 shadow-slate-400'>
                <h1 className='px-2 text-xl'>Bill.no : 2</h1>
                <div className=' flex justify-between border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2'>
                  <h1>Date:</h1>
                  <h1>Price-On-Date :</h1>
                </div>
                <div className='flex flex-col'>
                  <table className='text-center bg-slate-300'>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10'>
                      <th>Product Name</th>
                      <th>Weight(g)</th>
                      <th>Price/Gram</th>
                      <th>Charges</th>
                      <th>Subtotal</th>
                    </tr>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10 '>
                      <td>chain</td>
                      <td>12</td>
                      <td>120</td>
                      <td>1200</td>
                      <td>12333</td>
                    </tr>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10 '>
                      <th colSpan={4}>Total-Price</th>
                      <td>123</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className={`${bills ? "" : "hidden"}` }>
            <Customerbills/>
          </div>
        </div>
    </div>
  )
}

export default Customer