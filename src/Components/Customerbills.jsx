import React from 'react'

function Customerbills() {
  return (
    <div>
        <div className='flex flex-col w-[90%] mx-auto my-2 min-[800px]:hidden'>
            <div className='border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2 text-l'>
              <h1>Name</h1>
              <h1>Number</h1>
            </div>
            <div className=''>
              <div className='bg-blue-200 p-2 py-4 rounded-2xl border-zinc-50 border-2 shadow-2xl mb-4 text-[12px]'>
                <h1 className='px-2 text-xl'>Bill.no : 1</h1>
                <div className=' flex justify-between border-2 rounded-xl p-2 bg-slate-300 border-white shadow-2xl mb-2'>
                  <h1>Date:</h1>
                  <h1>Price-On-Date :</h1>
                </div>
                <div className='flex flex-col'>
                  <table className='text-center bg-slate-300'>
                    <tr className='border-2 border-slate-50 rounded-2xl h-10 text-[11px]'>
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
  )
}

export default Customerbills