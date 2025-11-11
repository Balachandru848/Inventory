import React, { useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import Customerbills from '../Components/Customerbills'
import SalesReport from '../Components/SalesReport';
import PurchaseReport from '../Components/PurchaseReport';
import StockReport from '../Components/StockReport';

function Report() {
  const [sales,setsales] = useState(true);
  const [purchase,setpurchase] = useState(false);
  const [stock,setstock] = useState(false);
  return (
    <div className='border-2 border-slate-200 rounded-2xl p-1 shadow-xl'>
        <Header/>
        <Title title={"Report"}/>
        <div className='flex flex-col py-4'>
          <div className='flex justify-evenly'>
            <div className='w-[30%] flex flex-col max-[600px]:w-[40%]'>
              <label htmlFor="start" className='my-1 text-2xl max-[600px]:text-xl'>Start-date</label>
              <input type="date"className='my-2 border-2 rounded border-slate-400' placeholder='dd/mm/yyyy' />
            </div>
            <div className='w-[30%] flex flex-col max-[600px]:w-[40%]'> 
              <label htmlFor="end" className='my-1 text-2xl max-[600px]:text-xl'>End-date</label>
              <input type="date"className='my-2 border-2 rounded border-slate-400' placeholder='dd/mm/yyyy' />
            </div>
          </div>
          <div className='flex mx-auto justify-evenly w-full h-10'>
            <div className='flex justify-evenly w-[70%]'>
              <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300 max-[600px]:text-[10px]' onClick={()=>{setpurchase(false),setsales(true),setstock(false)}}>Sales</button>
              <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300 max-[600px]:text-[10px]' onClick={()=>{setpurchase(true),setsales(false),setstock(false)}}>Purchase</button>
              {/* <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300'>Customer</button> */}
              <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300 max-[600px]:text-[10px]' onClick={()=>{setpurchase(false),setsales(false),setstock(true)}}>stock</button>
            </div>
          </div>
          <div className='flex justify-center items-center my-2 h-10'>
            <button className='flex justify-center bg-blue-300 w-[74%]  rounded p-2 hover:bg-slate-400 hover:text-white max-[600px]:w-[88%]'>Generate-Report</button>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex w-[100%] justify-evenly'>
              <div className='w-[30%] border-2 border-slate-200 p-2 rounded max-[600px]:w-[41%] shadow-xl shadow-slate-300 '>
                <p className='text-slate-500 max-[600px]:text-[10px]'>Total weight</p>
                <h1 className='text-2xl font-medium max-[600px]:text-xl'>12312g</h1>
              </div>
              <div className='w-[30%] border-2 border-slate-200 p-2 rounded max-[600px]:w-[41%] shadow-xl shadow-slate-300'>
                <p className='text-slate-500 max-[600px]:text-[10px]'>Total Amount</p>
                <h1 className='text-2xl font-medium max-[600px]:text-xl'>123123</h1>
              </div>
            </div>
          </div>  
          <div className='my-4'>
            <h1 className='ml-[14%] text-2xl py-4 max-[600px]:text-xl max-[600px]:ml-[2%]'>Sales</h1>
              <SalesReport visible={sales}/>
              <PurchaseReport visible={purchase}/>
              <StockReport visible={stock}/>
          </div>
        </div>

    </div>
  )
}

export default Report