import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'



import Movie from './Movie'

const Row = ({title, fetchURL, rowID}) => {

    const [movies, setMovies] = useState([])

    useEffect( () => {
        axios.get(fetchURL). then ((response) => {
            setMovies(response.data.results)
        })

    },[fetchURL])
 
    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        
        slider.scrollLeft-=500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        
        slider.scrollLeft+=500;
    }

  return (
    <>
        
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='flex relative items-center group'>
        <MdChevronLeft size={40} onClick={slideLeft}className='bg-white rounded-full opacity-50 absolute  hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' />
        <div id={'slider' + rowID } className='w-ful h-ful overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
                movies.map((item, id) => (
                 <Movie key={id} item={item}/>
                )) 
            }
        </div>
        <MdChevronRight size={40} onClick={slideRight}className='bg-white rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />
    </div>
    </>
  )
}

export default Row