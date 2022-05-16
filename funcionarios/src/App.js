import React from "react";
//import {BrowserRouter as Router, Route} from 'react-router-dom';

//import Logon from "./pages/Logon";
import Routes from './routes'

import './global.css';

function App(){
  return(
    // <Router>
    //     <Routes>
    //         <Route path="/" element={<Logon/>} />
    //         <Route path="/Login" element={<Logon/>} />
    //     </Routes>
    // </Router>
    <Routes/>
  );
}

export default App;