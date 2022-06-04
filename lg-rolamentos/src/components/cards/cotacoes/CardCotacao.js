import { Card, CardBody } from "reactstrap";
import css from "./CardCotacao.css";
import axios from 'axios';

let valorCot = []

const getCotacaoDolar = () => {
    const endpoint = 'http://127.0.0.1:8000/get-dollar-price';
    const response = axios.get(endpoint)
        .then((res) => setCotDolar(res.data.cotDolar))
        .catch((err) => {
            console.log("Error" + err)
        })
}


function setCotDolar(dolarAPI){
    valorCot.push(dolarAPI)
    localStorage.setItem('valorCot', JSON.stringify(valorCot))
}
getCotacaoDolar()
const newValorDolar = JSON.parse(localStorage.getItem("valorCot"))

function CardCotacao(){
    return(
        <div className="cotacoes">
            <Card className="card cardDolar">
                <CardBody>
                    <h4>Cotação Dólar </h4>
                    <h4 className="valDol">{newValorDolar}</h4>
                </CardBody>
            </Card>
            <Card className="card cardGuarani">
                <CardBody>
                    <h4>Cotação Guarani</h4>
                </CardBody>
            </Card>
        </div>
    );
}

export default CardCotacao;