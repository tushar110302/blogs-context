import Footer from "./components/Footer"
import Header from "./components/Header"
import Page from "./components/Page"
import { BlogProvider } from "./context/BlogContext"


function App() {

  return (
    <BlogProvider>
      <Header/>
      <Page/>
      <Footer/>
    </BlogProvider>
  )
}

export default App
