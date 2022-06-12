import { useState, React } from "react";
import "./Cotacao.css";
import CardCotacao from "../../components/cards/cotacoes/CardCotacao";
import { FormText } from "reactstrap";

function Cotacao() {
  return (
    <div className="cotacao">
      <CardCotacao />
    </div>
  );
}

export default Cotacao;
