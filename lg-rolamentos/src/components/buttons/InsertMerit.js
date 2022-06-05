import css from "./InsertMerit.css";
import {Button, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

function ButtonInsertMerit(){
    return(
        <div className='mainDiv'>
            <div className="botaoCadastrar">
                <Button className="insert">
                    <Link className="linkForm" to="/api/activities/formInsertMerit">Cadastrar Mérito</Link>
                </Button>
            </div>
        </div>
    );
}

export default ButtonInsertMerit;