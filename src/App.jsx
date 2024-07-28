import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { NextUIProvider, Divider } from "@nextui-org/react"
import { useNavigate, Routes, Route } from 'react-router-dom'
import useDarkMode from './Hooks/useDarkMode'
import './App.css'
import Loader from './Components/Loader/Loader'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Volunteer from './Components/volunteer'
import Donate from './Components/Donate'
import Contact from './Components/Contact'
import Projects from './Components/Committees/Projects'
import Events from './Components/Events'
import Resources from './Components/Resources'
import Impact from './Components/Impact'

function App() {
  const navigate = useNavigate();
  const [theme, toggleTheme] = useDarkMode()

  return (
    <NextUIProvider navigate={navigate}>
      <main className='text-foreground bg-background'>
        <Routes>
          <Route loader={<Loader />} path='/' element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>} />
          <Route loader path='/Projects' element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>} />
            <Route loader={<Loader />} path='/volunteer' element={
            <>
              <Navbar />
              <Volunteer />
              <Footer />
            </>} />
            <Route loader={<Loader />} path='/contact' element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>} />
            <Route loader={<Loader />} path='/donate' element={
            <>
              <Navbar />
              <Donate />
              <Footer />
            </>} />
            <Route loader={<Loader />} path='/Events' element={
            <>
              <Navbar />
              <Events />
              <Footer />
            </>} />
            <Route loader={<Loader />} path='/Resources' element={
            <>
              <Navbar />
              <Resources />
              <Footer />
            </>} />
            <Route loader={<Loader />} path='/Impact' element={
            <>
              <Navbar />
              <Impact />
              <Footer />
            </>} />
          <Route path='*' element={<div className='h-[100vh] w-full pt-[10vh] flex justify-center items-center'>
            <Navbar />
            <div className='flex h-10 items-center space-x-4 text-2xl'>
              <div>404</div>
              <Divider orientation='vertical' />
              <div>Page Not Found</div>
            </div>
          </div>} />
        </Routes>
      </main>
    </NextUIProvider>
  )
}

export default App
