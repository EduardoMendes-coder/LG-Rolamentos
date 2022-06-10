import css from "./FormInactiveManager.css";
import { useParams } from 'react-router';

export default function FormInactiveManager(){
    const {id} = useParams()

    return (
        <div className="formInacManager">
            <form className="formIn" action={"https://lg-rolamentos-api.herokuapp.com/demit-manager/" + id + "/"} method="post">
                <label className="label">Tem certeza que deseja demitir o gerente {id} ?</label>
                <input className="respostaInact" type="submit" value="Demitir"></input>
            </form>
        </div>
    )
}