import React from 'react'
import Nav from './Component/NavComponent/Nav'
import './App.css'
import MainLayouts from './Component/MainComponent/MainLayouts'


function App() {
  return (
    <div className=' h-full w-full flex justify-center items-center flex-col'>
      <Nav/>
      <MainLayouts/>
    </div>
  )
}

export default App
