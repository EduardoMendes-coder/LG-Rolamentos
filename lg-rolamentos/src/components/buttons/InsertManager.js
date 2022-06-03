import css from "./InsertManager.css";
import {Button, NavLink} from "reactstrap";
import {Link} from "react-router-dom";


function ButtonInsertManager(){
    return(
        <div className='mainDiv'>
            <div className="botaoCadastrar">
                <Button className="insert">
                    <Link className="linkForm" to="/api/manager/formInsertManager">Cadastrar Gerente</Link>
                </Button>
            </div>
        </div>
    );
}

export default ButtonInsertManager;