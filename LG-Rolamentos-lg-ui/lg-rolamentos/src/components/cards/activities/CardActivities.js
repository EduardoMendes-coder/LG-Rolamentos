import "./CardActivities.css";
import { Card } from "reactstrap";
import {
  BiCalendarEdit,
  BiMedal,
  BiXCircle,
  BiBookmarkAltMinus,
} from "react-icons/bi";
import { Link } from "react-router-dom";

function CardActivities() {
  return (
    <div className="cont">
      <h1 className="fw-bold">Controle de Atividades</h1>
      <div className="fundo mt-1">
        <Link className="butt buttFaltas" to="/api/activities/presenceControl">
          <Card className="act cardFaltas">
            <h4 className="text textFaltas">Faltas </h4>
            <BiCalendarEdit className="iconAct iconBiCal" />
          </Card>
        </Link>

        <Link className="butt buttMerits" to="/api/activities/merits">
          <Card className="act cardMeritos">
            <h4 className="text textMerits">Atividades</h4>
            <BiMedal className="iconAct iconMerit" />
          </Card>
        </Link>

        {/* <Link className="butt buttAdvertence" to="/api/activities/advertences">
          <Card className="act cardAdvertencia">
            <h4 className="text textAdvertence">Advertência</h4>
            <BiXCircle className="iconAct iconAdvert" />
          </Card>
        </Link>

        <Link className="butt buttReport" to="/api/activities/report">
          <Card className="act cardRelatorio">
            <h4 className="text textReport">Relatório</h4>
            <BiBookmarkAltMinus className="iconAct iconReoirt" />
          </Card>
  </Link> */}
      </div>
    </div>
  );
}

export default CardActivities;
