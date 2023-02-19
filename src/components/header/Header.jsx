import React from 'react'

const Header = ({ headerText }) => {
    return (
        <h1 className='w-full mx-auto text-center font-semibold text-3xl text-slate-700 uppercase'>{headerText}</h1>
    )
}

export default Header