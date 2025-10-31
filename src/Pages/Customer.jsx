import React, { useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Customerbills from '../Components/Customerbills';
function Customer() {

  const [bills,setbills] = useState(false);
  const [showname,setshowname] = useState("");  
  const [shownumber,setshownumber] = useState(0);

  const getSafeData = (key) => {
    try {
      const data = localStorage.getItem(key);
      if (!data) return []; // key missing or empty
      const parsed = JSON.parse(data);
      return parsed ?? [];  // handle null or invalid
    } catch (err) {
      console.error(`Error parsing ${key}:`, err);
      return [];
    }
  };


  let customer = getSafeData("Customer")
  
  // localStorage.setItem("Customer", JSON.stringify([]));

  
  const selectedCustomer = customer.find(c => c.Name === showname);

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
              {
                customer.map((cust,index)=>{
                  return(
                    <div key={index} className='border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2 shadow-slate-400' onClick={()=>{bill,setshowname(cust.Name),setshownumber(cust.Number)}}>
                      <h1>{cust.Name}</h1>
                      <h1>{cust.Number}</h1>
                    </div>
                  )

                })

              }
            </div>
          </div>
          <div className='flex flex-col w-[80%] max-[800px]:hidden'>
            <div className='border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2 text-xl shadow-slate-400'>
              <h1>{showname}</h1>
              <h1>{shownumber}</h1>
            </div>
            <div className=''>
              
              <div>
                {selectedCustomer?.Bills?.map((bill, billIndex) => (
                  <div
                    key={billIndex}
                    className='bg-blue-200 p-2 py-4 rounded-2xl border-zinc-50 border-2 shadow-2xl mb-4 shadow-slate-400'>
                    <h1 className='px-2 text-xl font-semibold'>Bill No: {billIndex + 1}</h1>

                    <div className='flex justify-between border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2'>
                      <h1>Date: {bill.Date}</h1>
                      <h1>Payment: {bill.PaymentMethod}</h1>
                    </div>

                    <div className='flex flex-col'>
                      <table className='text-center bg-slate-300 w-full border-2 border-slate-100 rounded-xl'>
                        <thead>
                          <tr className='border-2 border-slate-50 rounded-2xl h-10'>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price/Unit</th>
                            <th>Charges</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>

                        <tbody>
                          {bill.Products?.map((p, i) => (
                            <tr key={i} className='border-2 border-slate-50 rounded-2xl h-10'>
                              <td>{p.pname}</td>
                              <td>{p.quantity}</td>
                              <td>{p.price}</td>
                              <td>{p.charges}</td>
                              <td>{p.subtotal}</td>
                            </tr>
                          ))}

                          <tr className='border-2 border-slate-50 rounded-2xl h-10 font-semibold bg-slate-200'>
                            <th colSpan={4}>Total Price</th>
                            <td>{bill.Total}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
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