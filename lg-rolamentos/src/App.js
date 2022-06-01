import './App.css';

import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import Logon from "./views/login/Login.js";
import TableEmployee from "./components/table/TableEmployee";
import ManagerView from "./views/manager/ManagerView";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manager" element={<ManagerView/>} />
                <Route path="/login" element={Logon} />
                <Route path="/tableEmployee" element={TableEmployee} />
            </Routes>
        </Router>
    );
}

export default App;