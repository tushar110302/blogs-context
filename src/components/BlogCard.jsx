import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogCard({post}) {
  return (
    <div>
        <NavLink to={`blogs/${post.id}`}>
            <p className="font-bold text-lg mt-7">{post.title}</p>
        </NavLink>
        
        <p className='text-sm mt-[4px]'>
            By <span className='italic'>{post.author}</span> on <NavLink to={`categories/${post.category.replaceAll(" ","-")}`} className='underline font-bold'>
                {post.category}
            </NavLink>
        </p>
        <p className='text-sm mt-[4px]'>
            Posted on <span>{post.date}</span>
        </p>
        <p className='text-md mt-[14px]'>{post.content}</p>
        <div className='flex gap-x-3'>
            {post.tags.map((tag, index) => (
                <NavLink key={index} to={`tags/${tag.replaceAll(" ","-")}`}>
                    <span className="text-blue-700 underline font-bold text-xs mt-[5px]" >
                        #{tag}
                    </span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogCard