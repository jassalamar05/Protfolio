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
import Projects from './Portfolio/Projects'
import ChatBox from './Portfolio/Chat'
import Nfixed from './Portfolio/NFIXED'
import Proj from './Portfolio/Cards'
import Contact from './Portfolio/Contact'





function App() {
  return (
    <>
    {/* <Lines/> */}
    {/* <Thread/> */}
    {/* <Proj/> */}

 

    <Nav/>
    <Backs/>
    <About/>
    <WorkProcess/>
    <ChatBox/>
    <Services/>
    <Projects/>
    <Contact/>
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
