import { Card, CardBody } from "reactstrap";
import css from "./CardCotacao.css";
import axios from 'axios';

let valorCotDolar = []
let valorCotGuarani = []

const getCotacaoDolar = () => {
    const endpoint = 'http://127.0.0.1:8000/get-dollar-price';
    const response = axios.get(endpoint)
        .then((res) => setCotDolar(res.data.cotDolar))
        .catch((err) => {
            console.log("Error" + err)
        })
}

const getCotacaoGuarani = () => {
    const endpoint = 'https://economia.awesomeapi.com.br/last/PYG-BRL';
    const response = axios.get(endpoint)
        .then((res) => setCotGuarani(res.data.PYGBRL['bid']))
        .catch((err) => {
            console.log("Error" + err)
        })
}

function setCotGuarani(guaraniAPI){
    valorCotGuarani.push(guaraniAPI)
    localStorage.setItem('valorCotGs', JSON.stringify(valorCotGuarani))
}

function setCotDolar(dolarAPI){
    valorCotDolar.push(dolarAPI)
    localStorage.setItem('valorCot', JSON.stringify(valorCotDolar))
}
getCotacaoGuarani()
getCotacaoDolar()
const newValorDolar = JSON.parse(localStorage.getItem("valorCot"))
const newValorGuarani = JSON.parse(localStorage.getItem("valorCotGs"))

function CardCotacao(){
    return(
        <div className="cotacoes">
            <Card className="card cardDolar">
                <CardBody>
                    <h4>Cotação Dólar </h4>
                    <h4 className="valMoedas valDol">{newValorDolar}</h4>
                </CardBody>
            </Card>
            <Card className="card cardGuarani">
                <CardBody>
                    <h4>Cotação Guarani</h4>
                    <h4 className="valMoedas valGs">{newValorGuarani}</h4>
                </CardBody>
            </Card>
        </div>
    );
}

export default CardCotacao;