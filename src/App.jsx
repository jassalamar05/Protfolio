import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Portfolio/Navbar'
import Backs from './Portfolio/Backs'
import About from './Portfolio/About'
import Footer from './Portfolio/Footer'
import WorkProcess from './Portfolio/Process'
import Services from './Portfolio/Skills'



function App() {
  return (
    <>
    <Nav/>
    <Backs/>
    <About/>
    <WorkProcess/>
    <Services/>
    <Footer/>
{/*    
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Nav />}>
          <Route index element={<Homes />} />
          <Route path="backs" element={<Backs />} />
          <Route path="about" element={<About />} />
          </Route>

    </Routes>
    </BrowserRouter> */}
    </>

  )
}

export default App
