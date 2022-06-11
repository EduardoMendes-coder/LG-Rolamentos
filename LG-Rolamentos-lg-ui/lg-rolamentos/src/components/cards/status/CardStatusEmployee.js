import { Card, CardBody } from "reactstrap";
import css from "./CardStatusEmployee.css";

const actives = localStorage.getItem("activesEmployee");
const inactives = localStorage.getItem("inactivesEmployee");

function cardStatusEmployee() {
  return (
    <Card className="cardInfo d-flex justify-content-center">
      <div className="cardStatus d-flex flex-row">
        <Card className="cardSt cardAtivo">
          <CardBody className="d-flex flex-column align-items-center">
            <h5 className="txSt textAtivos">Funcionários Ativos</h5>
            <h2 className="numS numAtiv">{actives}</h2>
          </CardBody>
        </Card>
        <Card className="cardSt cardInativo">
          <CardBody className="d-flex flex-column align-items-center">
            <h5 className="txSt textInativos">Funcionários Inativos</h5>
            <h2 className="numS numInat">{inactives}</h2>
          </CardBody>
        </Card>
      </div>
    </Card>
  );
}

export default cardStatusEmployee;
