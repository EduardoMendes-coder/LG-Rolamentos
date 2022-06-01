import css from "./InsertEmployee.css";
import {Button, NavLink} from "reactstrap";
import EmployeeForm from "../forms/EmployeeForm";
import ManagerForm from "../forms/ManagerForm";
import {Link} from "react-router-dom";

function onChangeInsert(){
    return(
       console.log('teste onclick')
    );
}

function ButtonInsertEmployee(){
    return(
        <div className='mainDiv'>
            <div className="botaoCadastrar">
                <Button className="insert">
                   <Link to="/formInsertEmployee">Cadastrar Funcionário</Link>
                </Button>
            </div>
            <div>

            </div>
        </div>
    );
}

export default ButtonInsertEmployee;