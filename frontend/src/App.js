import React, { useState } from 'react'
/* import './App.css'; */
import { BrowserRouter,Route,Routes } from "react-router-dom"
import CreateUser from  "../src/pages/CreateUser"



function App() {
  const [id,setId] = useState("");
  const getId = (id) => {
    setId(id);
  }
  return (
    
      <BrowserRouter>     
        <Routes>
          <Route path="/createForm" element={<CreateUser/>}/>
        </Routes>         
      </BrowserRouter>        
  );
}

export default App;     