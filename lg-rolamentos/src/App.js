import './App.css';

import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import EmployeeForm from "./components/forms/EmployeeForm";
import ManagerForm from "./components/forms/ManagerForm";
import Logon from "./views/login/Login.js";
import TableEmployee from "./components/table/TableEmployee";


function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manager" element={<ManagerForm />} />
                <Route path="/form" element={<EmployeeForm />} />
                <Route path="/login" element={Logon} />
                <Route path="/tableEmployee" element={TableEmployee} />
            </Routes>
        </Router>
    );
}

export default App;