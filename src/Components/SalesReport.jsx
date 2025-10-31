import React from 'react'

function SalesReport({visible}) {
    const customer = localStorage.getItem("Customer") ? JSON.parse(localStorage.getItem("Customer")) : [];
  return (
    <div className={`flex flex-col justify-evenly items-center h-auto ${visible ? "": "hidden"}`}>
        {customer.length === 0 ? (
                <h2 className='text-xl text-gray-500 mt-10'>No Bills Found</h2>
              ) : (
                customer.map((cus, index) => (
                  <div
                    key={index}
                    className='my-2 flex flex-col w-[74%] border-2 border-slate-300 shadow-xl bg-slate-100 p-2 rounded-2xl max-[600px]:w-[100%]'
                  >
                    <h1 className='text-xl max-[600px]:text-lg font-semibold'>
                      Bill No: {index + 1}
                    </h1>

                    <div className='flex justify-between bg-slate-300 border-2 border-slate-200 shadow-sm rounded-lg p-2 my-2'>
                      <div className='flex flex-col max-[600px]:text-sm'>
                        <h1 className='font-semibold'>{cus.Name || "Unknown"}</h1>
                        <h1>{cus.Number || "N/A"}</h1>
                      </div>
                      <div className='text-right max-[600px]:text-sm'>
                        <h1>{cus.Bills.Date || "No Date"}</h1>
                      </div>
                    </div>

                    {/* Loop through each bill */}
                    {cus.Bills?.map((bill, billIndex) => (
                      <div key={billIndex} className='flex flex-col my-2'>
                        <table className='text-center bg-slate-300 max-[600px]:text-[12px] rounded-lg overflow-hidden'>
                          <thead>
                            <tr className='border-2 border-slate-50 rounded-2xl h-10 bg-slate-400 text-white'>
                              <th>Product Name</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bill.Products?.map((product, pIndex) => (
                              <tr
                                key={pIndex}
                                className='border-2 border-slate-50 rounded-2xl h-10'
                              >
                                <td>{product.pname}</td>
                                <td>{product.quantity}</td>
                                <td>₹{product.price}</td>
                                <td>₹{product.subtotal}</td>
                              </tr>
                            ))}
                            <tr className='border-2 border-slate-50 h-10 font-semibold'>
                              <td colSpan={3} className='text-right pr-4'>Total:</td>
                              <td>₹{bill.Total}</td>
                            </tr>
                            <tr className='border-2 border-slate-50 h-10'>
                              <td colSpan={4} className='text-right pr-4'>
                                Payment: <span className='font-semibold'>{bill.PaymentMethod}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                ))
              )}
    </div>
  )
}

export default SalesReport