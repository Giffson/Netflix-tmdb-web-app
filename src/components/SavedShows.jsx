import React, {useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import {db} from '../firebase'
import {updateDoc,doc, onSnapshot } from 'firebase/firestore'

const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth();


    const slideLeft = () => {
        let slider = document.getElementById('slider' )
        
        slider.scrollLeft-=500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' )
        
        slider.scrollLeft+=500;
    }
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })

    },[user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try{
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result,
            })
        }catch(error){
                console.log(error)
        }
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
    <div className='flex relative items-center group'>
        <MdChevronLeft size={40} onClick={slideLeft}className='bg-white rounded-full opacity-50 absolute  hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' />
        <div id={'slider'} className='w-ful h-ful overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
                movies.map((item, id) => (
                    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px]lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img  className='w-full h-suto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full'>{item?.title}</p>
               <p onClick={() => deleteShow(item.id)}><AiOutlineClose className='absolute top-4 right-4 text-gray-300' /></p>
                    </div>
                 </div>
                )) 
            }
        </div>
        <MdChevronRight size={40} onClick={slideRight}className='bg-white rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />
    </div>
    </>
  )
}

export default SavedShows