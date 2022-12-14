import React from 'react'

export const Hero = ({ heading, message }) => {
    return (
        <div className='flex justify-center items-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />

            <div className='p-5 text-white z-[2]'>
                <h1 className='text-5xl py-5 font-bold'>{heading}</h1>
                <p className='text-xl my-2'>{message}</p>
                <button className='border py-2 px-5 rounded'>See more</button>
            </div>
        </div>
    )
}
