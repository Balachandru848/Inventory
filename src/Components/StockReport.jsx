import React from 'react'

function StockReport({visible}) {
    const products = localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : [];

  return (
    <div className={`flex flex-col justify-evenly items-center h-auto ${visible ? "": "hidden"}`} >
        <div className='my-2 flex flex-col w-[74%] border-2 border-slate-300 shadow-xl bg-slate-100 p-4 rounded-2xl max-[600px]:w-[100%]'>
            <h1 className='text-xl font-semibold text-slate-700 max-[600px]:text-lg'>
            Product Stock Details
            </h1>

            <div className='flex justify-between bg-slate-300 border-2 border-slate-200 shadow-sm rounded-lg p-2 my-3'>
            <div className='flex flex-col max-[600px]:text-sm'>
                <h1>Total Products: {products.length}</h1>
                <h1>Total Quantity: {products.reduce((sum, p) => sum + Number(p.Quantity), 0)}</h1>
            </div>
            <div className='max-[600px]:text-sm text-right'>
                <h1>Date: {new Date().toLocaleDateString()}</h1>
            </div>
            </div>

            <div className='flex flex-col'>
            <table className='text-center bg-slate-300 max-[600px]:text-[12px] w-full rounded-lg overflow-hidden'>
                <thead>
                <tr className='border-2 border-slate-50 rounded-2xl h-10 bg-slate-400 text-white'>
                    <th>S.no</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                </tr>
                </thead>

                <tbody>
                {products.map((item, index) => (
                    <tr key={index} className='border-2 border-slate-50 rounded-2xl h-10'>
                    <td>{index + 1}</td>
                    <td>{item.ProductName}</td>
                    <td>{item.Category}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Price}</td>
                    </tr>
                ))}

                {/* Total row */}
                <tr className='border-2 border-slate-50 rounded-2xl h-10 font-semibold bg-slate-200'>
                    <td colSpan={3}>Total</td>
                    <td>{products.reduce((sum, p) => sum + Number(p.Quantity), 0)}</td>
                    <td>
                    ₹
                    {products.reduce(
                        (sum, p) => sum + Number(p.Price) * Number(p.Quantity),
                        0
                    )}
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>


  )
}

export default StockReport