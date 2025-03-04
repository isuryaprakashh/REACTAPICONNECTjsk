import React from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import Home from './Home';
import Demo1 from './../mapdemo/Demo1';
import Demo2 from './../mapdemo/Demo2';
import APIDemo1 from '../apidemo/APIDemo1';
import APIDemo2 from '../apidemo/APIDemo2'
import NotFound from './NotFound';
import './style.css'
import JSONDemo from '../apidemo/JSONDemo';

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="mapdemo1">Demo1</Link>
        <Link to="mapdemo2">Demo2</Link>
        <Link to="apidemo1">Demo3</Link>
        <Link to="apidemo2">Demo4</Link>
        <Link to="jsondemo">Demo5</Link>

      </div>



        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/mapdemo1" Component={Demo1}/>
          <Route path="/mapdemo2" Component={Demo2}/>
          <Route path="/apidemo1" Component={APIDemo1}/>
          <Route path="/apidemo2" Component={APIDemo2}/>
          <Route path='/jsondemo' Component={JSONDemo}/>
          <Route path="*" Component={NotFound}/>
        </Routes>
    </div>
  )
}
