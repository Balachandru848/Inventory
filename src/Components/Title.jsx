import React from 'react'

function Title({title,payment}) {
  return (
    <div className='flex justify-between my-1 h-[15%] max-[600px]:h-[10%]'>
        <h2 className='text-4xl p-6 max-[600px]:text-3xl'>{title}</h2>
        <div className='flex justify-center items-center'>
        <div className={`w-40 max-[600px]:w-20 flex-3 flex-col p-4 border-2 border-solid border-slate-100 m-2 rounded-xl shadow-md max-[600px]:p-0 max-[600px]: shadow-slate-400
          ${payment ? "" :"hidden"}`}>
              <p className='flex text-slate-500 max-[600px]:p-1 max-[600px]:text-[10px] '>Payments</p>
              <div className='flex h-2 rounded-full bg-blue-300 my-2 max-[600px]:h-1 mx-1'>
                <div className='w-[80%] bg-blue-500   rounded-full '></div>
              </div>
              <div className='flex justify-between'>
                  <p className='flex text-slate-500 text-[10px] max-[600px]:text-[6px] max-[600px]:p-1'>Online: 80%</p>
                  <p className='flex text-slate-500 text-[10px] max-[600px]:text-[6px] max-[600px]:p-1'>Cash: 20%</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Title
