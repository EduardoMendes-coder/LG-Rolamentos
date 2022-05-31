import {Card, CardBody} from "reactstrap";
import css from "./CardStatusEmployee.css";

function cardStatusEmployee(){
    return(
        <Card className="cardInfo">
            <div className="textos">
                <h2 style={{color: "grey"}}>Funcionários</h2>
                <h5 style={{color: "grey"}}>Home/Funcionários</h5>
            </div>
            <div className="cardStatus">
                <Card className="cardAtivo">
                    <CardBody>
                        <h5>Funcionários Ativos</h5>
                    </CardBody>
                </Card>
                <Card className="cardInativo">
                    <CardBody>
                        <h5>Funcionários Inativos</h5>
                    </CardBody>
                </Card>
            </div>
        </Card>
    );
}

export default cardStatusEmployee;