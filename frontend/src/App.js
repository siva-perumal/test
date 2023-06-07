import React, { useState } from 'react'
/* import './App.css'; */
import { BrowserRouter,Route,Routes } from "react-router-dom"
import CreateUser from  "../src/pages/CreateUser"
/* import UpdateUser from "../src/pages/UpdateUser"
import Home from "../src/pages/Home"
import Navigation from './Navigation'
import Login from './pages/Login' */



function App() {
  const [id,setId] = useState("");
  const getId = (id) => {
    setId(id);
  }
  return (
    
      <BrowserRouter>     
        <Routes>
         {/*  <Route path="Login"/> */}
          <Route path="/createForm" element={<CreateUser/>}/>
          {/* <Route path="/UpdateForm" element={<UpdateUser id={id}/>}/>
          <Route path='/' element={<Home getId={getId}/>}/> */}
        </Routes>
      </BrowserRouter>    
  );
}

export default App;       