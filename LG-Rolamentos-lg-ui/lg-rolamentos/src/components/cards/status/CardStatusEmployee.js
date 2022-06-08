import {Card, CardBody} from "reactstrap";
import css from "./CardStatusEmployee.css";

const actives = localStorage.getItem("activesEmployee");
const inactives = localStorage.getItem("inactivesEmployee");

function cardStatusEmployee(){
    return(
        <Card className="cardInfo">
            <div className="textos">
                <h2 style={{color: "grey"}}>Funcionários</h2>
                <h5 style={{color: "grey"}}>Home/Funcionários</h5>
            </div>
            <div className="cardStatus">
                <Card className="cardSt cardAtivo">
                    <CardBody>
                        <h5 className="txSt textAtivos">Funcionários Ativos: </h5>
                        <h2 className="numS numAtiv">{actives}</h2>
                    </CardBody>
                </Card>
                <Card className="cardSt cardInativo">
                    <CardBody>
                        <h5 className="txSt textInativos">Funcionários Inativos:</h5>
                        <h2  className="numS numInat">{inactives}</h2>
                    </CardBody>
                </Card>
            </div>
        </Card>
    );
}

export default cardStatusEmployee;