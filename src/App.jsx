import { Outlet } from "react-router-dom"
import { BlogProvider } from "./context/BlogContext"


function App() {

  return (
    <BlogProvider>
      <Outlet/>
    </BlogProvider>
  )
}

export default App
