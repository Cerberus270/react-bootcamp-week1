import React, { useState } from 'react'
import useUser from '../../hooks/useUser';
import CardInfo from '../card/CardInfo';
import Default from '../default/Default';
import Error from '../error/Error';

const Form = () => {
  const [username, setUsername] = useState('cerberus270');
  const { user, fetchUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.includes(' ') || username.length === 0) {
      alert("Write a valid username!")
    } else {
      await fetchUser(username);
    }
  }



  return (
    <div className='flex flex-col mt-2 mx-auto'>
      <div className=' md:w-9/12 sm:w-4/5 lg:w-2/6 mx-auto px-2'>
        <form className='bg-white py-2 px-5 mb-5 shadow-lg rounded-md' onSubmit={handleSubmit}>
          <div className='mb-5'>
            <label htmlFor='username' className='text-gray-700 font-semibold'>GitHub username: </label>
            <input type="text" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id='username' placeholder="@" onChange={e => setUsername(e.target.value)} value={username} />
          </div>
          <div className='mb-5'>
            <input type={"submit"} className=' cursor-pointer bg-slate-600 hover:bg-slate-700 rounded-lg py-2 px-10 w-full text-cyan-50 font-mono' value={"Search GitHub User"} />
          </div>
        </form>

      </div>
      <div className='md:w-2/5 sm:w-4/5 lg:w-2/6 mx-auto px-2'>
        {user?.login ? <CardInfo data={user} /> : user?.message ? <Error /> : <Default />}

      </div>

    </div>
  )
}

export default Form