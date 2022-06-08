import css from "./FormInactiveEmployee.css";
import { useParams } from 'react-router';

export default function FormInactiveEmployee(){
    const {id} = useParams()

    return (
        <div className="formInacManager">
            <form className="formIn" action={"http://127.0.0.1:8000/demit-employee/" + id + "/"} method="post">
                <label className="label">Tem certeza que deseja demitir o funcionário {id} ?</label>
                <input className="respostaInactEmpl" type="submit" value="Demitir"></input>
            </form>
        </div>
    )
}