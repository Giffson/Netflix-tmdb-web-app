import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full  text-white'>
    <img className=' w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>

    <h1 className='text-white text-5xl font-bold '>My Shows</h1>
 
     
    </div>
    
      </div>
      <SavedShows />
      </>
  )
}

export default Account