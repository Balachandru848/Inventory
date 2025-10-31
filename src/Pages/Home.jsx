import React, { use, useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import { Link } from 'react-router-dom'


function Home() {
  // const [counts, setcounts] = useState(1);
  const getSafeData = (key) => {
    try {
        const data = localStorage.getItem(key);
        if (!data) return []; // key missing or empty
        const parsed = JSON.parse(data);
        return parsed ?? []; // handle 'null' → []
        } catch (err) {
            console.error(`Error parsing ${key}:`, err);
            return [];
        }
    };
  const totalSales = getSafeData("bill").length
  const totalInventoryitem = getSafeData("Product").length
  const Bill = getSafeData("bill")
  // const customer = localStorage.getItem("Customer") ? JSON.parse(localStorage.getItem("Customer")) : [];
  let count = 0
  return (
    <div className='h-[100%]  border-2 border-slate-200 rounded-2xl p-1 shadow-xl'>
      <Header />
      <Title title={"Dashboard"} payment={true}/>
      <div className='flex justify-around h-[25%] max-[600px]:h-[40%] max-[600px]:flex-col'>
          <div className='flex-2 flex-col p-4 border-2 border-solid border-slate-100 m-2 rounded-xl shadow-md max-[600px]:p-0 shadow-slate-400'>
              <p className='flex text-slate-500 max-[600px]:text-sm p-1'>Total Sales Count</p>
              <p className='text-2xl px-2 max-[600px]:text-xl p-0'>{totalSales}</p>
          </div>
          <div className='flex-2 flex-col p-4 border-2 border-solid border-slate-100 m-2 rounded-xl shadow-md max-[600px]:p-0 shadow-slate-400'>
              <p className='flex text-slate-500 max-[600px]:text-sm p-1'>Total Inventory items</p>
              <p className='text-2xl px-2 max-[600px]:text-xl p-0'>{totalInventoryitem}</p>
          </div>
          <div className='flex-3 flex-col p-2 border-2 border-solid border-slate-100 m-2 rounded-xl shadow-md max-[600px]:p-0 shadow-slate-400 max-[600px]:h-[1000px]'>
              <div className='flex w-full h-full justify-evenly'>
                <div className='w-[10%] flex flex-col justify-center text-center '>
                  <div className='flex flex-col-reverse h-[80%]  w-full rounded-t-2xl'>
                    <div className='rounded-t-2xl h-[100%] bg-red-400 relative'>
                        <p className='absolute top-1 left-1 text-[12px] max-[600px]:text-[10px] ' >100%</p>
                    </div>
                  </div>
                  <p className='text-[12px]'>Sales</p>
                </div>
                <div className='w-[10%] flex flex-col justify-center text-center'>
                  <div className='flex flex-col-reverse h-[80%] w-full rounded-t-2xl'>
                    <div className='rounded-t-2xl h-[70%] bg-green-300 relative'>
                      <p className='absolute top-1 right-0.4 text-[12px] left-1' >70%</p>
                    </div>
                  </div>
                  <p className='text-[12px]'>Purchase</p>
                </div>
                <div className='w-[10%] flex flex-col justify-center text-center'>
                  <div className='flex flex-col-reverse h-[80%] w-full rounded-t-2xl'>
                    <div className='rounded-t-2xl h-[50%] bg-blue-300 relative'>
                      <p className='absolute top-1 left-1.5 text-[12px]' >50%</p>
                    </div>
                  </div>
                  <p className='text-[12px]'>New_Cus</p>
                </div>
              </div>
          </div>
      </div>
      <div className='flex flex-col text-slate-500 h-[48%] max-[600px]:h-[40%] max-[600px]:p-1 '>
            <div className='flex p-4 max-[600px]:px-2' >  
              <h2 className='text-black text-2xl max-[600px]:text-xl'>Bill History</h2>
            </div>
            <table className='shadow-md max-[600px]:text-[12px] shadow-slate-400'>
              <tr className='border-2 border-solid border-slate-200'>
                <th className='py-2'>Bill.no</th>
                <th className='py-2'>Product</th>
                <th className='py-2'>Customer</th>
                {/* <th className='py-2'>Weight</th> */}
                <th className='py-2'>Amount</th>
                <th className='py-2'>Payment</th>
              </tr>
              {
                Bill.map((bill,index)=>{
                  return(
                    
                    <tr className='border-2 border-solid border-slate-200'>
                      <td className='text-center py-2'>{index+1}</td>
                      <td className='text-center'>{bill.Products.map((p, i) => (<span key={i}>{p.pname}{i !== bill.Products.length - 1 && ", "}
                                                                </span>
                                                              ))}</td>
                      <td className='text-center'>{bill.Name}</td>
                      {/* <td className='text-center'>20g</td> */}
                      <td className='text-center'>{bill.Total}</td>
                      <td className='text-center'>{bill.PaymentMethod}</td>
                    </tr>
                  )
                })
              }
              
              
            </table> 
      </div>
    </div>
  )
}

export default Home