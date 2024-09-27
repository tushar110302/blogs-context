import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import BlogCard from './BlogCard';

function Page() {
    const {posts, loading} = useContext(BlogContext);
  return (
    <div className='bg-white mx-auto w-1/2 max-w-[670px] mt-14 mb-14'>
        <div className=' realtive flex flex-col items-center justify-center' >
        {
            loading ? 
            (<div className='absolute font-extrabold text-3xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>Loading...</div>) : 
            (
                posts.length === 0 ? 
                (<div>No Posts Found</div>) : 
                (posts.map((post) => (
                   <BlogCard key={post.id} post={post}/>
                )))
            )
        }
        </div>
    </div>
    
  )
}

export default Page