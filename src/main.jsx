import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BlogPage from './pages/BlogPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import TagPage from './pages/TagPage.jsx'
import { StrictMode } from 'react'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>} />
            <Route path='blogs/:blogId' element={<BlogPage/>} />
            <Route path='categories/:category' element={<CategoryPage/>} />
            <Route path='tags/:tag' element={<TagPage/>} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <RouterProvider router={router}/>
    </StrictMode>
)
