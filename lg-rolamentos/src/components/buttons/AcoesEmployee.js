import css from "./AcoesEmployee.css";
import {Button} from "reactstrap";

function AcoesEmployee(){
    return (
        <div className="acoes">
            <Button className="acao consultar" outline>Consultar</Button>
            <Button className="acao editar" outline>Editar</Button>
            <Button className="acao demitir" outline>Demitir</Button>
        </div>
    );
}

export default AcoesEmployee;