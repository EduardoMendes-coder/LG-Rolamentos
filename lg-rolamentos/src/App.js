import './App.css';

import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import Logon from "./views/login/Login.js";
import ManagerView from "./views/manager/ManagerView";
import EmployeeForm from "./components/forms/EmployeeForm";
import ManagerForm from "./components/forms/ManagerForm";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manager" element={<ManagerView/>} />
                <Route path="/login" element={<Logon />} />
                <Route path="/formInsertEmployee" element={<EmployeeForm />} />
                <Route path="/formInsertManager" element={<ManagerForm />} />
            </Routes>
        </Router>
    );
}

export default App;