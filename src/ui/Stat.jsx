import React from 'react'
const colors={
    blue:"bg-blue-100 text-blue-500",
    green:"bg-green-100 text-green-500",
    yellow:"bg-yellow-100 text-yellow-500"
    }

function Stat({icon, title, value, color}) {

  return (
    <div className='p-5 bg-primary-900 grid grid-rows-2 grid-cols-[5rem,1fr] gap-x-8'>
        <div className={`aspect-square row-span-2 flex justify-center self-center rounded-full ${colors[color]}`}>
             {icon}
        </div>
        <h2 className='font-bold self-center text-md text-primary-600'>{title}</h2>
        <p className='self-center text-2xl'>{value? value : "-"}</p>
    </div>
  )
}

export default Stat