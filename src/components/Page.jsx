import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'

function Page() {
    const {posts, loading} = useContext(BlogContext);
  return (
    <div>
    {
        loading ? 
        (<div>Loading...</div>) : 
        (
            posts.length === 0 ? 
            (<div>No Posts Found</div>) : 
            (posts.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>
                        By <span>{post.author}</span> on <span>{post.category}</span>
                    </p>
                    <p>
                        Posted on <span>{post.date}</span>
                    </p>
                    <p>{post.content}</p>
                    <div>
                        {post.tags.map((tag, index) => (
                            <span key={index}>#{tag}</span>
                        ))}
                    </div>
                </div>
            )))
        )
    }
    </div>
  )
}

export default Page