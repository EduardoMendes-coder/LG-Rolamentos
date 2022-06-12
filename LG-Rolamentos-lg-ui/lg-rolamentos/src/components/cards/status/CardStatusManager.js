import {Card, CardBody} from "reactstrap";
import css from "./CardStatusManager.css";

const actives = localStorage.getItem("actives");
const inactives = localStorage.getItem("inactives");


function CardStatusManager(){
    return(
        <Card className="cardInfoManager">
            <div className="textosManager">
                <h5 style={{color: "grey"}}></h5>
            </div>
            <div className="cardStatusManager">
                <Card className="cardMan cardAtivoManager">
                    <CardBody>
                        <h5 className="txStManag textAtivosManag">Gerentes Ativos:</h5>
                        <h2 className="numSM numAtiv">{actives}</h2>
                    </CardBody>
                </Card>
                <Card className="cardMan cardInativoManager">
                    <CardBody>
                        <h5 className="txStManag textInativosManag">Gerentes Inativos:</h5>
                        <h2  className="numSM numInat">{inactives}</h2>
                    </CardBody>
                </Card>
            </div>
        </Card>
    );
}

export default CardStatusManager;