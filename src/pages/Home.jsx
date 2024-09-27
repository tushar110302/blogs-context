import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Page from '../components/Page'
import Footer from '../components/Footer'
import { BlogContext } from '../context/BlogContext'

function Home() {
  const {fetchPosts} = useContext(BlogContext)
  useEffect(()=> { 
    fetchPosts();
  }, [])
  return (
    <div>
        <Header/>
        <Page/>
        <Footer/>
    </div>
  )
}

export default Home