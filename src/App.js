import React, { useState } from "react";
import './index.css';
import { Login } from "./Login";
import { Register } from "./Register";
import AuthDetails from "./components/AuthDetails";

import { auth } from "./firebase";

/*
//first app
function App() {
  
  const [currentForm, setCurrentForm] = useState('login');

  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="App">
      {
        //<> <Login /><Register /><AuthDetails /> </>
        //currentForm === "Login" ? <> <Login onFormSwitch={toggleForm}/><AuthDetails /> </> : <> <Register onFormSwitch={toggleForm}/><AuthDetails /> </> 
        
        //AuthDetails.Login ? <Login /> :
        //<h1>Hello</h1>
        
        currentForm === "Login" ? <> <Login onFormSwitch={toggleForm}/> </> : <> <Register onFormSwitch={toggleForm}/><AuthDetails /> </> 
        
      }
    </div>
  );
}

export default App;
*/



//------------------------------------------------------------




//second app
function App() {

  const [currentForm, setCurrentForm] = useState('login');

  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {
        currentForm === "Login" ? <> <Login onFormSwitch={toggleForm}/> </> : <> <Register onFormSwitch={toggleForm}/><AuthDetails /> </> 
   
    }
       </div>
  );
}

export default App;

