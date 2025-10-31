import React from 'react'

function PurchaseReport({visible}) {
    const purchase = localStorage.getItem("Purchase") ? JSON.parse(localStorage.getItem("Purchase")) : [];
    const PurchaseDetail = purchase[purchase.length - 1] || {Products: [], Total: 0, PaymentMethod: "N/A", Date: "N/A", SupplierName: "N/A"};
  return (  
    <div className={`flex flex-col justify-evenly items-center h-auto ${visible ? "": "hidden"}`}>
        <div className='my-2 flex flex-col w-[74%] border-2 border-slate-300 shadow-xl bg-slate-100 p-2 rounded-2xl max-[600px]:w-[100%]'>
            <h1 className='text-xl max-[600px]:text-lg'>Purchase Bill</h1>

            
            <div className='flex justify-between bg-slate-300 border-2 border-slate-200 shadow-sm rounded-lg p-2 my-2'>
            <div className='flex flex-col max-[600px]:text-sm'>
                <h1>Supplier: {PurchaseDetail.SupplierName}</h1>
                <h1>Payment: {PurchaseDetail.PaymentMethod}</h1>
            </div>
            <div className='max-[600px]:text-sm text-right'>
                <h1>Date: {PurchaseDetail.Date}</h1>
                <h1>Total: ₹{PurchaseDetail.Total}</h1>
            </div>
            </div>

            
            <div className='flex flex-col'>
            <table className='text-center bg-slate-300 max-[600px]:text-[12px] w-full rounded-lg overflow-hidden'>
                <thead>
                <tr className='border-2 border-slate-50 rounded-2xl h-10 bg-slate-400 text-white'>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Charges</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                {PurchaseDetail.Products.map((item, idx) => (
                    <tr key={idx} className='border-2 border-slate-50 rounded-2xl h-10'>
                    <td>{item.pname}</td>
                    <td>{item.price}</td>
                    <td>{item.charges}</td>
                    <td>{item.subtotal}</td>
                    </tr>
                ))}

                {/* Total Row */}
                <tr className='border-2 border-slate-50 rounded-2xl h-10 font-semibold bg-slate-200'>
                    <td colSpan={3}>Total Amount</td>
                    <td>₹{PurchaseDetail.Total}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>

  )
}

export default PurchaseReport