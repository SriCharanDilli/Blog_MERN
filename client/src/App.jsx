import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Projects from './Pages/Projects'
import Header from './Components/Header'
import SignUp from './Pages/SignUp'
import FooterCom from './Components/FooterCom'
function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/projects' element={<Projects/>}/>

  </Routes>
  <FooterCom/>
    </BrowserRouter>
  )
}

export default App
