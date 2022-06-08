import css from "./ActivityView.css";
import CardActivities from "../../components/cards/activities/CardActivities";

function ActivityView(){
    return(
        <div className="containerAct">
            <CardActivities />
        </div>
    );
}

export default ActivityView;