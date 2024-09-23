import React from 'react'
import csoon from '../src/csoon.jpg'
const Home = () => {
  return (

    <div className='w-screen h-screen' style={{ backgroundImage: `url(${csoon})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>

      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-white text-[100px] font'>Coming Soon!</h1>
        <div className="w-16 mx-5 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

    </div>
  )
}

export default Home
