import React from 'react'

const Notfound = () => {



  return (
    <div className='h-[500px] w-[500px] mx-auto'>
      <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_3X1oGR.json" background="transparent" speed="1" loop autoplay></lottie-player>

      <div className='text-center space-y-2'>
        <h1 className='text-'>Page not found</h1>
        <button className='text-pink-600'>Click To Go Home Page</button>
      </div>


    </div>
  )
}

export default Notfound
