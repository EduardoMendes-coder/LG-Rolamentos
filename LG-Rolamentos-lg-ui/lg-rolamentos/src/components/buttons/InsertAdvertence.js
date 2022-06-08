import {Button, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

function ButtonInsertAdvertence(){
    return(
        <div className='mainDiv'>
            <div className="botaoCadastrar">
                <Button className="insert">
                    <Link className="linkForm" to="/api/activities/advertences/formInsertAdvertence">Cadastrar Advertência</Link>
                </Button>
            </div>
        </div>
    );
}

export default ButtonInsertAdvertence;