import css from "./InsertEmployee.css";
import { Button } from "reactstrap";
import EmployeeForm from "../forms/EmployeeForm";

function ButtonInsertEmployee(){
    return(
        <div className='mainDiv'>
            <div className="botaoCadastrar">
                <Button className="insert" >Cadastrar Funcionário</Button>
            </div>
        </div>
    );
}

export default ButtonInsertEmployee;