import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/contact',
      element: <Contact/>
    },
    {
      path:'/projects',
      element: <Projects/>
      },
      {
        path:'/skills',
        element: <Skills/>
        },
])
  return(
    <>
       <Navbar/>
       <RouterProvider router={router}/>
       <Footer/>
    </>
  )
}

export default App
