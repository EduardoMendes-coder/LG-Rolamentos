import React from 'react';
import './Home.css';
import TableEmployee from "../../components/table/TableEmployee";
import CardCotacao from "../../components/cards/cotacoes/CardCotacao";

function Home(){
    return(
        <div className="home">
            <TableEmployee />
        </div>
    );
}
export default Home;