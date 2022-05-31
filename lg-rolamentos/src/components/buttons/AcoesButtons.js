import css from "./AcoesButtons.css";
import {Button} from "reactstrap";

function AcoesButtons(){
    return (
        <div className="acoes">
            <Button className="acao consultar" outline>Consultar</Button>
            <Button className="acao editar" outline>Editar</Button>
            <Button className="acao demitir" outline>Demitir</Button>
        </div>
    );
}

export default AcoesButtons;