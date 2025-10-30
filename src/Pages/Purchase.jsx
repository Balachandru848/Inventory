import React, { useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import js from '@eslint/js';
function Purchase() {

  const [rows,setrows] = useState([{pname:"",price:"",charges:"",subtotal:0}]);
  const [total, settotal] = useState(0)
  const [online,setonline] = useState(false);
  const [cash,setcash] = useState(false)
  const [name,setname] = useState("");

  const purchase = JSON.parse(localStorage.getItem("Purchase")) || [];

  const save = () =>{
    if(name === ""){
      alert("Enter the supplier name")
      return;
    }
    if(rows.length === 0){
      alert("Add atleast one product")
      return;
    } 
    if(!online && !cash){
      alert("Select the payment method")
      return;
    }
    const PurchaseDetail = {
      Products : rows,
      Total : total,
      PaymentMethod : online ? "Online" : "Cash",  
    }
    purchase.push(PurchaseDetail)
    localStorage.setItem("Purchase",JSON.stringify(purchase))
    alert("Purchase saved successfully")
    setrows([{pname:"",price:"",charges:"",subtotal:0}])
    settotal(0)
    setonline(false)
    setcash(false)
    window.location.reload();
  }
  const Online = () =>{
    setonline(true)
    setcash(false)
  }

  const Cash = () =>{
    setonline(false)
    setcash(true)
  }

  const addrows = ()=>{
      setrows([...rows, {pname: "", price: "", charges: "" ,subtotal:0}]);
  }

  const update = (index,key,value) =>{
    const row = [...rows]
    row[index][key] = value;
    row[index]["subtotal"] = Number(row[index]["price"])+Number(row[index]["charges"]); 
    setrows(row)
  }

  const totalprice = () =>{
    setTimeout((index)=>{
      // if(rows[index]["subtotal"] !== 0){
      const sum = rows.reduce((acc, row) => acc + Number(row.subtotal || 0), 0);
        settotal(sum)
      // }
    },1000)
  }
  
  setTimeout(()=>{
    if(rows.length === 0){ settotal(0)}
    let sum = 0;
    for(let i=0;i<rows.length;i++){
      sum = sum + Number(rows[i]["subtotal"])
    }
    settotal(sum)
  },2000)
  const remove = (index) =>{
    setrows((row) => row.filter((_,i)=> index !== i ))
  }
  return (
    <div className='border-2 border-slate-200 rounded-2xl p-1 shadow-xl'>
      <Header />
      <Title title={"Purchase"}/>
      <div className='flex justify-center items-center mt-4 '>
        <div className='flex flex-col justify-center w-[50%] max-[800px]:text-[14px] max-[1000px]:text-[12px] max-[800px]:w-[90%] '>
          <label htmlFor="" className = 'p-2 text-slate-600 text-xl'>Supplier Name</label>
          <input type="text"  className='border-2 border-slate-300 w-[100%] shadow-xl mx-2 px-2 rounded-sm' onChange={(e)=>{setname(e.target.value)}}/>
        </div>
      </div>
      <div className='flex justify-center items-center pb-10'>
          <div className='flex flex-col w-[50%] justify-center max-[800px]:w-[90%] '>
            <h1 className='m-2 text-xl text-slate-600 '>Products</h1>
            <table className='w-[100%] mx-2 text-center shadow-2xl table-fixed max-[800px]:text-[10px] max-[1000px]:text-[12px]'>
                <tr className='border-2 border-slate-300 rounded-2xl h-10 text-slate-500'>
                  <th>Product Name</th>
                  {/* <th>Quantity</th> */}
                  <th>Price</th>
                  <th>Charges</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
                {
                  rows.map((rows,index)=>(
                    <tr key={index} className='border-2 border-slate-300 h-10 text-slate-500'>
                      <td><input type="text" placeholder='Pname' className='w-[100%] text-center  border-none focus:outline-none' onChange={(e)=>{update(index,"pname",e.target.value)}}/></td>
                      {/* <td><input type="text" placeholder='Weight' className='w-[100%] text-center  border-none focus:outline-none' onChange={(e)=>{update(index,"pweight",e.target.value)}}/></td> */}
                      <td><input type="text" placeholder='Price' className='w-[100%] text-center  border-none focus:outline-none' onChange={(e)=>{update(index,"price",e.target.value)}}/></td>
                      <td><input type="text" placeholder='Charges' className='w-[100%] text-center  border-none focus:outline-none' onChange={(e)=>{update(index,"charges",e.target.value); totalprice(index);}}/></td>
                      <td>{rows.subtotal}</td>
                      <td className='text-red-500'><FontAwesomeIcon icon={faXmark} onClick={()=>{remove(index); totalprice(index);}}/></td>
                    </tr>
                  ))
                } 
                <tr className='border-2 rounded-2xl h-10 border-slate-300 text-slate-500'>
                  <td colSpan={4}>Total-Price</td>
                  <td colSpan={1} className='border-l-2 '>{total}</td>
                </tr>
            </table>
            
            <button className='text-[12px] w-[30%] border-2 my-4  border-slate-400 rounded-sm p-2 bg-blue-400 hover:shadow-2xl shadow-blue-400  transition-shadow duration-300 ml-auto max-[600px]:text-[10px] max-[600px]:p-1 ' onClick={addrows}>Add-New-Product</button>
            <div className='flex py-1 items-center'>
              <h2 className='ml-20 text-slate-500 max-[600px]:text-[12px] max-[600px]:ml-10'>Payment Method :</h2>
              <button className={`text-[12px] w-[20%] border-2 p-1  border-slate-400 rounded-sm  bg-blue-400 hover:shadow-2xl shadow-blue-400  transition-shadow duration-300 ml-auto mx-1 max-[600px]:text-[10px] max-[600px]:h-8
               ${online 
              ? "bg-blue-500 text-white shadow-lg" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`} onClick={Online}>Online</button>
              <button className={`text-[12px] w-[20%] border-2 p-1 border-slate-400 rounded-sm  bg-blue-400 hover:shadow-2xl shadow-blue-400  transition-shadow duration-300 max-[600px]:text-[10px] max-[600px]:h-8 
              ${cash ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`} onClick={Cash}>Cash</button>
            </div>
            <button className='w-[100%] border-2 mx-2  border-slate-400 rounded-sm p-2 bg-green-600 hover:shadow-2xl shadow-green-400  transition-shadow duration-300 text-white' onClick={save}>Save-Purchase</button>
          </div>
        </div>
      </div>
  )
}

export default Purchase
