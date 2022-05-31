import React from 'react';
import css from './Home.css';
import TableEmployee from "../../components/table/TableEmployee";
import CardCotacao from "../../components/cards/cotacoes/CardCotacao";

function Home(){
    return(
        <div className="home">
            <CardCotacao />
            <TableEmployee />
        </div>
    );
}
export default Home;