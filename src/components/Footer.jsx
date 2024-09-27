import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import { useLocation } from 'react-router-dom';

function Footer() {
    const {page, setPage, fetchPosts, totalPage} = useContext(BlogContext)
    const location = useLocation()
    function clickHandler(page){
        setPage(page);
        if(location.pathname.includes('tags')){
            const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
            fetchPosts(page,tag)
        }
        else if(location.pathname.includes('categories')){
            const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
            fetchPosts(page,'',category)
        }
        else{
            fetchPosts(page)
        }
    }
  return (
    <div className=' w-full flex justify-center bg-white fixed bottom-0 text-center py-1 mt-4 border-t-2 '>
        <div className='flex justify-between p-1 items-center w-1/2 max-w-[670px]'>
            <div className=''>
                {
                    page>1 &&
                    <button onClick={() => clickHandler(page-1)} className='rounded-md px-2 py-1 border border-stone-400 hover:border-black mr-2'>Previous</button>
                }
                {
                    page<totalPage &&
                    <button onClick={() => clickHandler(page+1)} className='rounded-md px-2 py-1 border border-stone-400 hover:border-black'>Next</button>
                }
            </div>
            <div className='font-bold'>
                Page {page} / {totalPage}
            </div>
        </div>
        
    </div>
  )
}

export default Footer