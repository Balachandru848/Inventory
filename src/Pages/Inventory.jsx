import React, { useState } from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark , faPenToSquare, faSquareCheck, faSquareXmark} from "@fortawesome/free-solid-svg-icons";
function Inventory() {

  let Pro = []
  if (JSON.parse(localStorage.getItem("Product"))){
    Pro = JSON.parse(localStorage.getItem("Product"))
  }

  const [additem, setadditem] = useState(false);

  const [Name,setName] = useState("")
  const [Category,setCategory] = useState("")
  const [quantity,setQuantity] = useState(0)
  const [inputarr,setinputarr] = useState(Array(Pro.length).fill(false))
  const [editName,seteditName] = useState("")
  const [editCategory,seteditCategory] = useState("")
  const [editQuantity,seteditQuantity] = useState(0)
  let category = []
  console.log(inputarr);
  const add = () =>{
    setadditem(!additem)
  }
  const product = () => {
    if(Name === "" || Category === "" || quantity === 0){
      alert("Check the missing field")
    }else{

      const ProductDetail = {
        ProductName : Name,
        Category : Category,
        Quantity : quantity
      }
      Pro.push(ProductDetail)
      localStorage.setItem("Product",JSON.stringify(Pro))
      setadditem(!additem)
      alert("product is added")
      category = Pro.map(pro => pro.Category);
      window.location.reload()
    }

  }
  category = Pro.map(pro => pro.Category);
  // setcategoryarr(category);
  const remove = (index) => {
    Pro.splice(index,1)
    localStorage.setItem("Product",JSON.stringify(Pro))
    alert("Product is removed")
    window.location.reload()
    category = Pro.map(pro => pro.Category);
  }
  
  const edit = (index)=>{
    let arr = [...inputarr]
    arr[index] = !arr[index]
    category = Pro.map(pro => pro.Category);
    setinputarr(arr)
  }
  const saveEdit = (index)=>{
    if(editName === "" || editCategory === "" || editQuantity === 0){
      alert("Check the missing field")
    } else{
      Pro[index]["ProductName"] = editName
      Pro[index]["Category"] = editCategory
      Pro[index]["Quantity"] = editQuantity
      localStorage.setItem("Product",JSON.stringify(Pro))
      alert("Product is edited")
      let arr = [...inputarr]
      arr[index] = !arr[index]
      setinputarr(arr)
      window.location.reload()
    }

  }
  const cancelEdit = (index)=>{
    let arr = [...inputarr]
    arr[index] = !arr[index]
    setinputarr(arr)
  }
  

  return (
    <div className='pb-2 border-2 border-slate-200 rounded-2xl p-1 shadow-xl'>
      <Header/>
      <Title title={"Inventory"} payment={false}/>
      <div className='flex w-[100%] justify-end h-12 pt-2 pr-2'>
        <button onClick={add} className='h-[100%] w-[200px] rounded-lg bg-blue-400 text-white max-[600px]:w-[100px]'>Add-Item</button>
      </div>
      <div className={`flex flex-col m-1 justify-center items-center ${additem ? "" : "hidden"}`}>
        
        <div className={`flex flex-col border-2 border-slate-100 rounded-xl shadow-2xl p-5 shadow-slate-400`}>
          <h1 className='py-1 text-2xl'>Add Product</h1>
          <table>
            <tr className=''>
              <td className='py-2'><label htmlFor="name" className='pr-2 text-slate-400'>Product Name</label></td>
              <td><input type="text" placeholder='Product Name' className='border-slate-300 border-2 rounded-sm text-sm p-1' onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            
            <tr>
              <td><label htmlFor="category" className='pr-2 text-slate-400'>Product Category</label></td>
              <td><input type="text" placeholder='category' className='border-slate-300 border-2 rounded-sm text-sm p-1' onChange={(e)=>{setCategory(e.target.value)}}/></td>
            </tr>
            <tr>
              <td><label htmlFor="quantity" className='pr-2 text-slate-400'>Quantity</label></td>
              <td><input type="Number" placeholder='quantity' className='border-slate-300 border-2 rounded-sm text-sm p-1' onChange={(e)=>{setQuantity(e.target.value)}}/></td>
            </tr>
          </table>
          <div className='pt-4 flex justify-end'>
            <button className='text-sm px-2 py-1 border-2 border-slate-300 rounded-lg mx-2 bg-slate-300 hover:bg-slate-100' onClick={add}>Cancel</button>
            <button className='text-sm px-2 py-1 border-2 border-blue-300 rounded-lg bg-blue-400 hover:bg-blue-200 text-white hover:text-black' onClick={product}>ADD-Item</button>
          </div>
        </div>
      </div>
      <div className='h-4'>
        
      </div>
      <div className='flex flex-col mx-4 border-2 border-slate-200 p-2  bg-slate-200 rounded-2xl'>
        <div className='flex items-center  rounded-2xl px-2'>
          <input type="text" placeholder='search' className='text-slate-500 w-full h-full p-2 px-4 rounded-2xl bg-white focus:outline-0 max-[600px]:p-1 max-[600px]:text-sm max-[600px]:pl-2'/>
        </div>
        <div className='flex items-center p-2 h-15 max-[600px]:h-10'>
          <select name="categories" id="" className='h-full w-[20%] rounded-2xl px-4 bg-white focus:outline-0 text-slate-400 max-[600px]:w-[30%] max-[600px]:text-sm'>
            
            <option value="all" className='bg-slate-200 rounded-2xl'>All</option>
            {category = [...new Set(category)]}
            {
              category.map((cat,index)=>(
                <option value={cat} key={index} className='bg-slate-200 rounded-2xl'>{cat}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className='flex flex-col mx-4 px-2 mt-4 max-[600px]:px-0 max-[600px]:mx-0 relative'>
        <table className='border-collapse border-spacing-0 w-full h-full rounded-2xl border-2 border-slate-300 text-center max-[600px]:text-sm '>
          <tr className='h-10 border border-slate-300'>
            <th>S.no</th>
            <th>ProductName</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>edit</th>
          </tr>
            { Pro.map((pro,index)=>(
              <tr className='h-10 text-slate-500'>
                <td>{index+1} </td>
                <td className={`${inputarr[index] ? "hidden" : "" } `}>{pro.ProductName}</td>
                <td className={`${inputarr[index] ? "" : "hidden" }  justify-centerw-[25%]`}><input type="text" placeholder={`${Pro[index].ProductName}`} className='w-[60%] text-center' onChange={(e)=>{seteditName(e.target.value)}}/></td>
                <td className={`${inputarr[index] ? "hidden" : "" }`}>{pro.Category}</td>
                <td className={`${inputarr[index] ? "" : "hidden" } justify-center w-[25%]`}><input type="text" placeholder={`${Pro[index].Category}`} className='w-[60%] text-center'onChange={(e)=>{seteditCategory(e.target.value)}}/></td>
                <td className={`${inputarr[index] ? "hidden" : "" }`}>{pro.Quantity}</td>
                <td className={`${inputarr[index] ? "" : "hidden" } justify-center w-[25%]`}><input type="Number" placeholder={`${Pro[index].Quantity}`} className='w-[60%] text-center' onChange={(e)=>{seteditQuantity(e.target.value)}}/></td>
                <td className={`${inputarr[index] ? "hidden" : "" }`}><FontAwesomeIcon icon={faPenToSquare} onClick={()=>{edit(index)}} className='text-blue-500 cursor-pointer' /><FontAwesomeIcon icon={faXmark} className='text-red-500 cursor-pointer' onClick={()=>{remove(index)}}/></td>
                <td className={`${inputarr[index] ? "" : "hidden" }`}><FontAwesomeIcon icon={faSquareCheck} className='text-green-400 cursor-pointer' onClick={()=>{saveEdit(index)}} /><FontAwesomeIcon icon={faSquareXmark}  onClick={()=>{cancelEdit(index)}} className='text-red-500 cursor-pointer'/></td>
              </tr>
            ))}
        </table>
      </div>
      

    </div>
  )
}

export default Inventory