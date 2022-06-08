import css from "./InsertEmployee.css";
import {Button, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

function ButtonInsertEmployee(){
    return(
        <div className='mainDiv'>
            <div className="botaoCadastrar">
                <Button className="insert">
                   <Link className="linkForm" to="/api/employee/formInsertEmployee">Cadastrar Funcionário</Link>
                </Button>
            </div>
        </div>
    );
}

export default ButtonInsertEmployee;