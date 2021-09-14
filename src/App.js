// import logo from './logo.svg';


import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";





//app.js meri puri site hai we also make additional component and add into our site

// curly braces ke andar jo bhi cheez hai usko js mana jaayega
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  //alert kya hai :alert phele null tha par abhi object hai

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }

  const togglemode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title ='TextUtils -Dark Mode';
      // setInterval(() => {
      //   document.title ='TextUtils is Amazing ';
        
      // }, 2000);
      // setInterval(() => {
      //   document.title ='Install TextUtils Now';
        
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title ='TextUtils -Light Mode';
    }
  }
  return (
    //if we are using jsx in react then we can only return only one element. In this case it is div
    //title="Textutlis matlab mai props pass kar raha hoon"
    //props are properties basically the variables in the component 
    // as a props mai apan string ,object aur link bhi pass kar sakte hai
    <>
    {/* <Router> */}
 <Navbar title ="TextUtils" mode={mode} toggleMode={togglemode}/>
 {/* alert ke ander state variable pass kiya */}
 <Alert alert={alert}/>
 {/* <Navbar /> */}
 <div className="container my-3">
 {/* <Switch> */}
   {/* { use of exact */}
   {/* /* /users ---> Component
    /users/home  --->Component -2 */} 
          {/* <Route exact path="/about"> */}
            {/* <About mode={mode}/> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */}
           <Textform  showAlert={showAlert}heading="Try TextUtils-Word counter,character counter,Remove extra spaces" mode={mode}/>
          {/* </Route> */}
  {/* </Switch> */}
 
 {/* <About/> */}
 </div>
 {/* </Router> */}

   </>
    

    
  );
  // the whole code in the return bracket is jsx
  //bole to ek html jisne js ka mask phena hua hai
  //jsx js ka ek syntax extension hai
  //<></>:This is called as jsx fragment
}

export default App;
