// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter } from 'react-router-dom';
// import APIDemo1 from './apidemo/APIDemo1';
// import APIDemo2 from './apidemo/APIDemo2';
// import Demo1 from './mapdemo/Demo1';
// import Demo2 from './mapdemo/Demo2';
import Navbar from './navbar/Navbar';


function App() {
 

  return (
    <div>
      <h2 style={{textAlign:"center"}}>React API demo</h2>

     <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
     
    </div>
  )
}

export default App
