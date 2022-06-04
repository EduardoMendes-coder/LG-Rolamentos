import { Card, CardBody } from "reactstrap";
import css from "./CardCotacao.css";


function CardCotacao(){
    return(
        <div className="cotacoes">
            <Card className="card cardDolar">
                <CardBody>
                    <h5>Cotação Dólar</h5>
                </CardBody>
            </Card>
            <Card className="card cardGuarani">
                <CardBody>
                    <h5>Cotação Guarani</h5>
                </CardBody>
            </Card>
        </div>
    );
}

export default CardCotacao;