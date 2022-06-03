import css from "./CardActivities.css";
import { Card } from "reactstrap";
import { BiCalendarEdit, BiMedal, BiXCircle } from "react-icons/bi";

function CardActivities(){
    return(
        <div className="cont">
            <Card className="act cardFaltas">
                <h4 className="text textFaltas">FALTAS </h4>
                <BiCalendarEdit className="iconAct iconBiCal" />
            </Card>
            <Card className="act cardMeritos">
                <h4 className="text textMerits">MÉRITOS</h4>
                <BiMedal className="iconAct iconMerit"/>
            </Card>
            <Card className="act cardAdvertencia">
                <h4 className="text textAdvertence">ADVERTÊNCIA</h4>
                <BiXCircle className="iconAct iconAdvert" />
            </Card>
        </div>
    );
}

export default CardActivities;