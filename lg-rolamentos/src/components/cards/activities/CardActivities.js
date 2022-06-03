import css from "./CardActivities.css";
import { Card } from "reactstrap";
import { BiCalendarEdit, BiMedal, BiXCircle } from "react-icons/bi";

function CardActivities(){
    return(
        <div className="cont">
            <Card className="mainCard">
                <Card className="act cardFaltas">
                    <h4>FALTAS </h4>
                    <BiCalendarEdit className="iconBiCal" />
                </Card>
                <Card className="act cardMeritos">
                    <h4>MÉRITOS</h4>
                    <BiMedal className="iconMerit"/>
                </Card>
                <Card className="act cardAdvertencia">
                    <h4>ADVERTÊNCIA</h4>
                    <BiXCircle className="iconAdvert" />
                </Card>
            </Card>
        </div>
    );
}

export default CardActivities;