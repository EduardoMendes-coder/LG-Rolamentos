import './App.css';

import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import Logon from "./views/login/Login.js";
import ManagerView from "./views/manager/ManagerView";
import EmployeeForm from "./components/forms/EmployeeForm";
import ManagerForm from "./components/forms/ManagerForm";
import ActivityView from "./views/atividades/ActivityView";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/api/manager" element={<ManagerView/>} />
                <Route path="/api/login" element={<Logon />} />
                <Route path="/api/employee/formInsertEmployee" element={<EmployeeForm />} />
                <Route path="/api/manager/formInsertManager" element={<ManagerForm />} />
                <Route path="/api/activities" element={<ActivityView />} />
            </Routes>
        </Router>
    );
}

export default App;