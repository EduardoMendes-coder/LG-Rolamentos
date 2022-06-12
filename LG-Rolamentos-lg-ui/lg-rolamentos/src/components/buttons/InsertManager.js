import css from "./InsertManager.css";
import {Button, NavLink} from "reactstrap";
import {Link} from "react-router-dom";


function ButtonInsertManager(){
    return(
        <div className='mainDiv d-flex justify-content-center align-items-center'>
            <div className="botaoCadastrar">
                <Button className="insert d-flex justify-content-center align-items-center">
                    <Link className="linkFormGerente" to="/api/manager/formInsertManager">+</Link>
                </Button>
            </div>
        </div>
    );
}

export default ButtonInsertManager;