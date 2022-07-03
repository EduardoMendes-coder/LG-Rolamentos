import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Calculadora from "./views/calculadora/Calculadora.js";
import Cotacao from "./views/cotacao/Cotacao.js";
import ManagerView from "./views/manager/ManagerView";
import EmployeeForm from "./components/forms/EmployeeForm";
import ManagerForm from "./components/forms/ManagerForm";
import MeritsView from "./views/atividades/MeritsView";
import ManagerViewForm from "./components/forms/ManagerViewForm";
import ManagerEditForm from "./components/forms/ManagerEditForm";
import EmployeeViewForm from "./components/forms/EmployeeViewForm";
import EmployeeEditForm from "./components/forms/EmployeeEditForm";
import FormInactiveEmployee from "../src/components/forms/FormInactiveEmployee";
import FormInactiveManager from "../src/components/forms/FormInactiveManager";
import FormInsertMerit from "../src/components/forms/FormInsertMerit";
import FormViewMerit from "../src/components/forms/FormViewMerit";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/manager" element={<ManagerView />} />
        <Route path="/api/calculadora" element={<Calculadora />} />
        <Route path="/api/cotacao" element={<Cotacao />} />
        <Route
          path="/api/employee/formInsertEmployee"
          element={<EmployeeForm />}
        />
        <Route
          path="/api/manager/formInsertManager"
          element={<ManagerForm />}
        />
        <Route path="/api/activities" element={<MeritsView />} />
        <Route
          path="/api/manager/formViewManager/:id"
          element={<ManagerViewForm />}
        />
        <Route
          path="/api/manager/formEditManager/:id"
          element={<ManagerEditForm />}
        />
        <Route
          path="/api/employee/formViewEmployee/:id"
          element={<EmployeeViewForm />}
        />
        <Route
          path="/api/employee/formEditEmployee/:id"
          element={<EmployeeEditForm />}
        />
        <Route
          path="/api/employee/formInactiveEmployee/:id"
          element={<FormInactiveEmployee />}
        />
        <Route
          path="/api/manager/formInactiveManager/:id"
          element={<FormInactiveManager />}
        />
        <Route
          path="/api/activities/merits/formInsertMerit"
          element={<FormInsertMerit />}
        />
        <Route
          path="/api/activities/merits/formViewMerit/:id"
          element={<FormViewMerit />}
        />
      </Routes>
    </Router>
  );
}

export default App;
