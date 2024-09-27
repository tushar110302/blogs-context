import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Page from '../components/Page'
import Footer from '../components/Footer'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { BlogContext } from '../context/BlogContext'

function TagPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
    const {fetchPosts} = useContext(BlogContext)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=> { 
        const page = searchParams.get('page') ?? 1;
        fetchPosts(page, tag);
      }, [])
  return (
    <div>
        <Header/>
        <div className='mt-20 mx-auto w-full flex max-w-[670px] -mb-8'>
            <button className='rounded-md px-2 py-1 border border-stone-400 hover:border-black mr-6' onClick={() => navigate(-1)}>
                Back
            </button>
            <h2 className=' text-2xl mt-4'>
                Blogs Tagged <span className='font-bold'>#{tag}</span>
            </h2>
        </div>
        <Page/>
        <Footer/>
    </div>
  )
}

export default TagPage