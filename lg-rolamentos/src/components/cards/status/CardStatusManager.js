import {Card, CardBody} from "reactstrap";
import css from "./CardStatusManager.css";

function CardStatusManager(){
    return(
        <Card className="cardInfoManager">
            <div className="textosManager">
                <h2 style={{color: "grey"}}>Gerentes</h2>
                <h5 style={{color: "grey"}}>Gerente/Status de Atividade</h5>
            </div>
            <div className="cardStatusManager">
                <Card className="cardAtivoManager">
                    <CardBody>
                        <h5>Gerentes Ativos</h5>
                    </CardBody>
                </Card>
                <Card className="cardInativoManager">
                    <CardBody>
                        <h5>Gerentes Inativos</h5>
                    </CardBody>
                </Card>
            </div>
        </Card>
    );
}

export default CardStatusManager;