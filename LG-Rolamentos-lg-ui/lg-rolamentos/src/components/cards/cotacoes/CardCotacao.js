import { Card, CardBody } from "reactstrap";
import "./CardCotacao.css";
import axios from "axios";
import bandeiraUS from "./images/ban-eua.png";
import bandeiraPY from "./images/ban-py.png";
import "bootstrap/dist/css/bootstrap.min.css";

let valorCotDolar = [];
let valorCotGuarani = [];

const getCotacaoDolar = () => {
  const endpoint = "https://lg-rolamentos-api.herokuapp.com/get-dollar-price";
  const response = axios
    .get(endpoint)
    .then((res) => setCotDolar(res.data.cotDolar))
    .catch((err) => {
      console.log("Error" + err);
    });
};

const getCotacaoGuarani = () => {
  const endpoint = "https://economia.awesomeapi.com.br/last/PYG-BRL";
  const response = axios
    .get(endpoint)
    .then((res) => setCotGuarani(res.data.PYGBRL["bid"]))
    .catch((err) => {
      console.log("Error" + err);
    });
};

function setCotGuarani(guaraniAPI) {
  valorCotGuarani.push(guaraniAPI);
  localStorage.setItem("valorCotGs", JSON.stringify(valorCotGuarani));
}

function setCotDolar(dolarAPI) {
  valorCotDolar.push(dolarAPI);
  localStorage.setItem("valorCot", JSON.stringify(valorCotDolar));
}
getCotacaoGuarani();
getCotacaoDolar();
const newValorDolar = JSON.parse(localStorage.getItem("valorCot"));
const newValorGuarani = JSON.parse(localStorage.getItem("valorCotGs"));

function CardCotacao() {
  return (
    <div className="cotacoes d-flex justify-content-center">
      <Card className="card cardDolar d-flex justify-content-center align-items-center flex-column">
        <div className="USD mt-2">
          <img
            src={bandeiraUS}
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </div>
        <CardBody className="text-center">
          <h4>Cotação Dólar </h4>
          <h6>U$</h6>
          <hr size="5" width="100%" align="center"></hr>
          <h5 className="valMoedas valDol">{newValorDolar}</h5>
        </CardBody>
      </Card>
      <Card className="card cardGuarani d-flex justify-content-center align-items-center flex-column">
        <div className="GUA mt-2">
          <img
            src={bandeiraPY}
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </div>
        <CardBody className="text-center">
          <h4>Cotação Guarani</h4>
          <h6>G$</h6>
          <hr size="5" width="100%" align="center"></hr>
          <h5 className="valMoedas valGs">{newValorGuarani}</h5>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardCotacao;
