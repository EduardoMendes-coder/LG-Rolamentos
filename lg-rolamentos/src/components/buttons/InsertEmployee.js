import css from "./InsertEmployee.css";
import { Button } from "reactstrap";

function ButtonInsertEmployee(){
    return(
        <div className='mainDiv'>
            <div className="botaoCadastrar">
                <Button className="insert" color="primary" outline>Cadastrar Funcionário</Button>
            </div>
        </div>
    );
}

export default ButtonInsertEmployee;