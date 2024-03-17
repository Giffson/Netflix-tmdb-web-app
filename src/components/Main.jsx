import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'

const Main = () => {
     const [movies, setMovies] = useState([])
     const [randomMovies, setRandomMovies] = useState(null)

     

    //  const movie = movies[Math.floor(Math.random() * movies.length)]

 

     useEffect(() => {

      axios.get(requests.requestUpcoming).then ( (response) => {
        setMovies(response.data.results)
      })
     },[])

     useEffect(() => {

      setRandomMovies( movies[Math.floor(Math.random() * movies.length)])

      if (movies.length > 0){
        const interval = setInterval(() => {
          const randomMovieIndex = Math.floor(Math.random() * movies.length)
          setRandomMovies(movies[randomMovieIndex])
        }, 9000)
        return () => clearInterval(interval)
      }

     },[movies,randomMovies])

     const tranketString = (str, num) => {

      if (str?.length > num){
        return str.slice(0, num) + '...';
      }
      return str;
     }


  
  return (
    <div className='w-full h-[550px]  text-white'>
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${randomMovies?.backdrop_path}`} alt={randomMovies?.title} />
       <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-white text-3xl md:text-5xl font-bold'>{randomMovies?.title}</h1>
       <div className='my-4'>
          <button className='border bg-gray-300 text-black py-2 px-5'>Play</button>
          <button className='border text-white ml-4 py-2 px-5'>Watch Later</button>
        </div>
        <p className="text-gray-400">Released on : {randomMovies?.release_date}</p>
      <p className="text-gray-200 w-full md:max-w-[70%] ">{tranketString(randomMovies?.overview, 120)}</p>
       </div>
       
        
      </div>
    </div>
  )
}

export default Main