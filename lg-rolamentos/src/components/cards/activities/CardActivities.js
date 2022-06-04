import css from "./CardActivities.css";
import { Card } from "reactstrap";
import { BiCalendarEdit, BiMedal, BiXCircle } from "react-icons/bi";
import {Link} from "react-router-dom";

function CardActivities(){
    return(
        <div className="cont">
            <Link className="butt buttFaltas" to="/api/activities/presenceControl">
                <Card className="act cardFaltas">
                    <h4 className="text textFaltas">FALTAS </h4>
                    <BiCalendarEdit className="iconAct iconBiCal" />
                </Card>
            </Link>

            <Link className="butt buttMerits" to="/api/activities/merits">
                <Card className="act cardMeritos">
                    <h4 className="text textMerits">MÉRITOS</h4>
                    <BiMedal className="iconAct iconMerit"/>
                </Card>
            </Link>

            <Link className="butt buttAdvertence" to="/api/activities/advertences">
                <Card className="act cardAdvertencia">
                    <h4 className="text textAdvertence">ADVERTÊNCIA</h4>
                    <BiXCircle className="iconAct iconAdvert" />
                </Card>
            </Link>
        </div>
    );
}

export default CardActivities;