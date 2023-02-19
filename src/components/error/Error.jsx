import React from 'react'

const Error = () => {
    return (
        <div className="bg-hero_pattern_error bg-cover bg-center h-80 overflow-hidden mx-auto rounded-lg mt-8">
            <div className="grid place-items-center">
                <div className='text-center bg-slate-800 bg-opacity-25 p-5 rounded-md'>
                    <h1 className='font-bold text-2xl text-white'>
                        The profile that you search don't exist
                    </h1>
                    <p className='text-white font-mono font-semibold'>
                        There is nothing here, try another user
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Error