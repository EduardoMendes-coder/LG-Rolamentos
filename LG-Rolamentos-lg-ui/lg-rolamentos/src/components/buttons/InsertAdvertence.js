import { Button, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function ButtonInsertAdvertence() {
  return (
    <div className="mainDiv">
      <div className="botaoMerit">
        <Link
          className="linkForm"
          to="/api/activities/advertences/formInsertAdvertence"
        >
          <Button className="btn-merit">Cadastrar Advertência</Button>
        </Link>
      </div>
    </div>
  );
}

export default ButtonInsertAdvertence;
