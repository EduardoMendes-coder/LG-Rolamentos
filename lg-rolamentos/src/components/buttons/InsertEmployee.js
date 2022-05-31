import css from "./InsertEmployee.css";
import { Button } from "reactstrap";

function ButtonInsertEmployee(){
    return(
        <div className="botaoCadastrar">
            <Button className="insert" color="primary" outline>Cadastrar Funcionário</Button>
        </div>
    );
}

export default ButtonInsertEmployee;