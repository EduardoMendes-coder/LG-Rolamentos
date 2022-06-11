import css from "./InsertEmployee.css";
import { Button, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function ButtonInsertEmployee() {
  return (
    <div className="mainDiv d-flex justify-content-center align-items-center">
      <div className="botaoCadastrar">
        <Button className="insertCad d-flex justify-content-center align-items-center">
          <Link className="linkFormCad" to="/api/employee/formInsertEmployee">
            +
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default ButtonInsertEmployee;
