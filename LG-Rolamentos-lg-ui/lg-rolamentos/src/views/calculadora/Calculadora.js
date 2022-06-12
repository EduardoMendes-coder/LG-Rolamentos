import { useState, React } from "react";
import "./Calculadora.css";
import CardCotacao from "../../components/cards/cotacoes/CardCotacao";
import { FormText } from "reactstrap";

function Calculadora() {
  var [porcentagem, setPorcentagem] = useState("");
  var [valor, setValor] = useState("");

  const handlePorcentagem = (e) => {
    setPorcentagem(e.target.value);
  };

  const handleValor = (e) => {
    setValor(e.target.value);
  };

  const resultado = valor * (porcentagem / 100 + 1);

  var resultadoFormatado = resultado.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="calculadora text-center">
      <div className="bodyCalc">
        <form className="formCalc flex-column">
          <h2 className="text-center ">Calculadora</h2>
          <h6 className="text-center mb-5">Porcentagem em cima do produto</h6>

          <h4>Insira a porcentagem de calculo: </h4>
          <input
            className="inv form-control p-3 w-100 "
            onChange={handlePorcentagem}
            value={porcentagem}
            type="number"
            placeholder="Insira a porcentagem"
            maxLength={50}
          />

          <h4 className="mt-5">Insira o valor a ser calculado: </h4>
          <input
            className="inv form-control p-3 w-100"
            onChange={handleValor}
            value={valor}
            type="number"
            placeholder="Insira o valor"
            maxLength={50}
          />

          <div className="valores mt-4 d-flex justify-content-around">
            <h2>{porcentagem}</h2>
            <h2>{valor}</h2>
          </div>

          <div className="resultado mt-3 d-flex flex-column align-items-center">
            <h2>{resultadoFormatado}</h2>
            <FormText>
              Resultado da adição de {porcentagem}% no valor de {valor}
            </FormText>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculadora;
