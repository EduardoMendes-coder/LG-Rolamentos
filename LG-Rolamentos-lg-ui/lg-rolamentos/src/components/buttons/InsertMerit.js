import css from "./InsertMerit.css";
import { Button, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function ButtonInsertMerit() {
  return (
    <div className="mainDiv">
      <div className="botaoMerit">
        <Link className="linkForm" to="/api/activities/merits/formInsertMerit">
          <Button className="btn-merit">Cadastrar Atividade</Button>
        </Link>
      </div>
    </div>
  );
}

export default ButtonInsertMerit;
