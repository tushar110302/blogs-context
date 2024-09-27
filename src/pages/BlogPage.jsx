import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/BlogContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';

function BlogPage() {
  const newBaseUrl = "/api";
  const [blog, setBlog] = useState(null)
  const [relatedBlog, setRelatedBlog] = useState([])
  const {loading, setLoading} = useContext(BlogContext);
  const location = useLocation()
  const blogId = location.pathname.split('/').at(-1);
  const navigate = useNavigate()

  async function getBlogs() {
    console.log(blogId)
    let url = `${newBaseUrl}/get-blog?blogId=${blogId}`
    setLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setBlog(data.blog)
      setRelatedBlog(data.relatedBlogs)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(()=>{
    getBlogs()
  }, [])

  return (
    <div className=''>
      <Header/>
      <div className='mt-20 mx-auto w-full max-w-[670px] '>
        <button className='rounded-md px-2 py-1 border border-stone-400 hover:border-black mr-6' onClick={() => navigate('/')}>
            Back
        </button>
      </div>
      <div className=' realtive flex flex-col items-center justify-center'>
        {
          loading ? (<div className='absolute font-extrabold text-3xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>Loading...</div>) :
          (
            blog ? 
            (
              <div className='bg-white mx-auto w-1/2 max-w-[670px] mb-14' >
                <BlogCard post={blog} />
                <h1>Related Blogs</h1>
                {
                  relatedBlog.map((b) => (
                    <BlogCard key={b.id} post={b}/>
                  ))
                }
              </div>
            ) :
            (<div>No Blogs Found</div>)
          )
        }
      </div>
      
    </div>
  )
}

export default BlogPage