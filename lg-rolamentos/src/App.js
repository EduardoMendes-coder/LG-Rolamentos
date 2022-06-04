import './App.css';

import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import Logon from "./views/login/Login.js";
import ManagerView from "./views/manager/ManagerView";
import EmployeeForm from "./components/forms/EmployeeForm";
import ManagerForm from "./components/forms/ManagerForm";
import ActivityView from "./views/atividades/ActivityView";
import MeritsView from "./views/atividades/MeritsView";
import AdvertenceView from "./views/atividades/AdvertenceView";
import PresenceControlView from "./views/atividades/PresenceControlView";
//import ManagerViewForm from "./components/forms/ManagerViewForm";
//import ManagerEditForm from "./components/forms/ManagerEditForm";
//import ManagerInactiveForm from "./components/forms/ManagerInactiveForm";

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
                <Route path="/api/activities/merits" element={<MeritsView />} />
                <Route path="/api/activities/advertences" element={<AdvertenceView />} />
                <Route path="/api/activities/presenceControl" element={<PresenceControlView />} />
                {/*<Route path="/api/manager/formViewManager/:id" element={<ManagerViewForm />} />*/}
                {/*<Route path="/api/manager/formEditManager/:id" element={<ManagerEditForm />} />*/}
                {/*<Route path="/api/manager/formInactiveManager/:id" element={<ManagerInactiveForm />} />*/}
            </Routes>
        </Router>
    );
}

export default App;