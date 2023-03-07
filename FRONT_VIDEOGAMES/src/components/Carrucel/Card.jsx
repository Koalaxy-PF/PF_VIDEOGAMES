import React from 'react'

export default function Card({img, name}) {
  return (
    <div className='w-[100%] bg-blue-300 shadow-md shadow-slate-600 mb-2'>

        <div>
            <img src={img} alt="dp" className='h-[180px] w-full object-cover' />
            <div className='flex flex-col gap-4 p-[20px]'>

                <div>
                    <h2 className='font-bold uppercase'>{name}</h2>
                </div>

                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum repudiandae magnam natus provident pariatur.</p>
                </div>

            </div>
        </div>

    </div>
  )
}
