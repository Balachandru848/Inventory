import React, { useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
function Sales() {

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
  const Product = getSafeData("Product");
  const bill = getSafeData("bill");
  const customer = getSafeData("Customer");

  
  const [rows,setrows] = useState([{pname:"",quantity:0,price:0,charges:"",subtotal:0}]);
  const [total, settotal] = useState(0)
  const [online,setonline] = useState(false);
  const [cash,setcash] = useState(false)
  const [customername,setcustomername] = useState("")
  const [customernumber,setcustomernumber] = useState(0)
  const [search,setsearch] = useState("")

  // let testresult  = false;
  const test = (pro) => {
    return (Object.values(pro).join("")).toLowerCase().includes(search.toLowerCase());
  };
  const updatedcustomer = () => {
    if(customername === "" || customernumber === ""){
      alert("enter the customer details")
    }else if(online === false && cash === false){
      alert("select the payment method")
      
    }else{
        const BillDetail = {
          Name : customername,
          Number : customernumber,
          Products : rows,
          Total : total,
          PaymentMethod : online ? "Online" : "Cash",
          Date : new Date().toLocaleDateString()
        }
        const CustomerDetail = {
          Name : customername,
          Number : customernumber,
          Bills:[]
        }
        bill.push(BillDetail)
        localStorage.setItem("bill",JSON.stringify(bill))
        const Proindex = customer.findIndex((customer) => (customer.Name.toLowerCase() === customername.toLowerCase()) && (customer.Number === customernumber));
        
        if(Proindex !== -1){
          customer[Proindex].Bills.push(BillDetail)
          localStorage.setItem("Customer",JSON.stringify(customer))
          const index = Product.findIndex((pro) => pro.ProductName === rows[rows.length-1].pname);
          Product[index].Quantity = Product[index].Quantity - rows[rows.length-1].quantity;
          alert("Bill Generated Successfully")
        } else {
          CustomerDetail.Bills.push(BillDetail)
          customer.push(CustomerDetail)
          localStorage.setItem("Customer",JSON.stringify(customer))
          alert("Bill Generated Successfully welcome new customer")
          setrows([{pname:"",quantity:0,price:0,charges:"",subtotal:0}])
          settotal(0)
          setcustomername("")
          setcustomernumber("")
          setonline(false)
          setcash(false)
          const index = Product.findIndex((pro) => pro.ProductName === rows[rows.length-1].pname);
          Product[index].Quantity = Product[index].Quantity - rows[rows.length-1].quantity;
          if(Product[index].Quantity === 0){
            Product.splice(index,1)
          }
          localStorage.setItem("Product",JSON.stringify(Product))
          window.location.reload();
        }

    }
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
      if(rows.length > 0 && rows[rows.length-1].quantity === 0){
        alert("fill the quantity")
      }else{
        const index = Product.findIndex((pro) => pro.ProductName === rows[rows.length-1].pname);
        Product[index].Quantity = Product[index].Quantity - rows[rows.length-1].quantity;
        if(Product[index].Quantity === 0){
          Product.splice(index,1)
        }
        localStorage.setItem("Product",JSON.stringify(Product))
        setrows([...rows, {pname: "", quantity: 0, price: 0, charges: "" ,subtotal:0}]);
      }
  }

  const update = (index, value) => {
    const row = [...rows];
    row[index]["quantity"] = value;
    setrows(row);
  }

  const updatecharges = (index, value) => {
    const row = [...rows];
    row[index]["charges"] = value;
    row[index]["subtotal"] = (Number(row[index]["quantity"]) * Number(row[index]["price"])) + Number(value);
    setrows(row);

  }


  const updateProduct = (pname) => () => {
    // alert(pname)
    const row = [...rows];
    const lastIndex = row.length - 1;
    row[lastIndex]["pname"] = pname[1];
    row[lastIndex]["price"] = pname[0];
    setrows(row);
    console.log(rows.pname);
    
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
      <Title title={"Sales"}/>
      <div className='flex justify-center items-center mt-4 '>
        <div className='flex flex-col justify-center w-[50%] max-[800px]:text-[14px] max-[1000px]:text-[12px] max-[800px]:w-[90%] '>
          <label htmlFor="" className = 'p-2 text-slate-600 text-xl'>Customer Name</label>
          <input type="text" className = ' border-2 border-slate-300 shadow-xl w-[100%] mx-2 px-2 rounded-sm' onChange={(e)=>{setcustomername(e.target.value)}} />
          <label htmlFor="" className='p-2 text-slate-600 text-xl'>Customer Number</label>
          <input type="text"  className='border-2 border-slate-300 w-[100%] shadow-xl mx-2 px-2 rounded-sm' onChange={(e)=>{setcustomernumber(e.target.value)}}/>
        </div>
      </div>
      <div className='flex justify-center items-center pb-10'>
          <div className='flex flex-col w-[50%] justify-center max-[800px]:w-[90%] '>
            <h1 className='m-2 text-xl text-slate-600 '>Products</h1>
            <table className='w-[100%] mx-2 text-center shadow-2xl table-fixed max-[800px]:text-[10px] max-[1000px]:text-[12px]'>
                <tr className='border-2 border-slate-300 rounded-2xl h-10 text-slate-500'>
                  <th>Product Name</th>
                  <th>Qantity</th>  
                  <th>Price</th>
                  <th>Charges</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
                {
                  rows.map((rows,index)=>(
                    <tr key={index} className='border-2 border-slate-300 h-10 text-slate-500'>
                      <td>{rows.pname}</td>
                      <td><input type="number" className='w-[100%] text-center  border-none focus:outline-none' onChange={(e)=>{update(index,e.target.value)}}/></td>
                      <td>{rows.price}</td>
                      <td><input type="number" className='w-[100%] text-center  border-none focus:outline-none' onChange={(e)=>{updatecharges(index,e.target.value)}}/></td>
                      <td>{rows.subtotal}</td>
                      <td className='text-red-500'><FontAwesomeIcon icon={faXmark} onClick={()=>{remove(index); totalprice(index);}}/></td>
                    </tr>
                  ))
                }
                <tr className='border-2 border-slate-300 h-10 text-slate-500'>
                  <td colSpan={6}><input type="text" placeholder='search product' className='w-[100%] text-center  border-none focus:outline-none' onChange={(e)=>{setsearch(e.target.value)}}/></td>
                </tr>
                {
                  Product.filter((pro) => test(pro)).map((pro,index)=>{
                    return(
                      <tr onClick={updateProduct([pro.Price,pro.ProductName])} key={index} className='border-2 border-slate-300 h-10 text-slate-500 hover:bg-slate-100 cursor-pointer'>
                        <td>{pro.ProductName}</td>
                        <td>{pro.Quantity}</td>
                        <td>{pro.Price}</td>
                      </tr>
                    )
                  })

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
            <button className='w-[100%] border-2 mx-2  border-slate-400 rounded-sm p-2 bg-green-600 hover:shadow-2xl shadow-green-400  transition-shadow duration-300 text-white' onClick={updatedcustomer}>Generate Bill</button>
          </div>
        </div>
      </div>
  )
}

export default Sales

