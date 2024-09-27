import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'

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
                    <div key={post.id}>
                        <p className="font-bold text-lg mt-7">{post.title}</p>
                        <p className='text-sm mt-[4px]'>
                            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                        </p>
                        <p className='text-sm mt-[4px]'>
                            Posted on <span>{post.date}</span>
                        </p>
                        <p className='text-md mt-[14px]'>{post.content}</p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag, index) => (
                                <span className="text-blue-700 underline font-bold text-xs mt-[5px]" key={index}>#{tag}</span>
                            ))}
                        </div>
                    </div>
                )))
            )
        }
        </div>
    </div>
    
  )
}

export default Page