import { useContext, useEffect } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Page from '../components/Page';
import Footer from '../components/Footer';
import { BlogContext } from '../context/BlogContext';

function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
    const {fetchPosts} = useContext(BlogContext)
    const [searchParams, setSearchParams] = useSearchParams()

    // console.log(category)/
    useEffect(()=> { 
        const page = searchParams.get('page') ?? 1;
        fetchPosts(page, '', category);
      }, [])

  return (
    <div >
        <Header/>
        <div className='mt-20 mx-auto w-full flex max-w-[670px] gap-x-3 '>
            <button className='rounded-md px-2 py-1 border border-stone-400 hover:border-black mr-6' onClick={() => navigate('/')}>
                back
            </button>
            <h2 className=' text-2xl mt-4'>
                Blogs on <span className='font-bold'>{category}</span>
            </h2>
        </div>
        <Page/>
        <Footer/>
    </div>
  )
}

export default CategoryPage