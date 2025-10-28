import React from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import Customerbills from '../Components/Customerbills'

function Report() {
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
              <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300' >Sales</button>
              <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300'>Purchase</button>
              <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300'>Customer</button>
              <button className='border-2 border-slate-200 rounded-2xl w-[23%] bg-slate-200 hover:bg-green-300'>stock</button>
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
            <div className='flex flex-col justify-evenly items-center h-auto'>
              
              <div className='my-2 flex flex-col w-[74%] border-2 border-slate-300 shadow-xl bg-slate-100 p-2 rounded-2xl  max-[600px]:w-[100%]'>
                <h1 className='text-xl max-[600px]:text-lg'>Bill.no:1</h1>
                <div className='flex justify-between bg-slate-300 border-2 border-slate-200 shadow-sm rounded-lg p-2 my-2'>
                  <div className='flex flex-col max-[600px]:text-sm'>
                    <h1>Name</h1>
                    <h1>number</h1>
                  </div>
                  <div className='max-[600px]:text-sm'>
                    <h1>Date</h1>
                    <h1>price on day</h1>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <table className='text-center bg-slate-300 max-[600px]:text-[12px]'>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10'>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Charges</th>
                      <th>Subtotal</th>
                    </tr>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10 '>
                      <td>chain</td>
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
              <div className='my-2 flex flex-col w-[74%] border-2 border-slate-300 shadow-xl bg-slate-100 p-2 rounded-2xl  max-[600px]:w-[100%]'>
                <h1 className='text-xl max-[600px]:text-lg'>Bill.no:1</h1>
                <div className='flex justify-between bg-slate-300 border-2 border-slate-200 shadow-sm rounded-lg p-2 my-2'>
                  <div className='flex flex-col max-[600px]:text-sm'>
                    <h1>Name</h1>
                    <h1>number</h1>
                  </div>
                  <div className='max-[600px]:text-sm'>
                    <h1>Date</h1>
                    <h1>price on day</h1>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <table className='text-center bg-slate-300 max-[600px]:text-[12px]'>
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
        </div>

    </div>
  )
}

export default Report