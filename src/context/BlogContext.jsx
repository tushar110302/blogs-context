import { createContext,useEffect, useState } from "react";

export const BlogContext = createContext()

export function BlogProvider({children}){
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchPosts(page=1) {
        const baseUrl = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        setLoading(true);
        try {
            console.log("HERE")
            const response = await fetch(baseUrl);
            const data = await response.json();
            setPosts(data.posts)
            console.log(data.posts)
            setPage(data.page);
            setTotalPage(data.totalPages);
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    
    useEffect(()=> {
        fetchPosts();
      }, [])

    const value = {
        page,
        setPage, 
        loading,
        setLoading,
        totalPage,
        setTotalPage,
        posts,
        setPosts,
        fetchPosts
    }
    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}