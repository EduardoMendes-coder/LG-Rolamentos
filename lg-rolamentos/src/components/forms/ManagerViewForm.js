import { useState } from 'react';
import css from "./ManagerForm.css";
import { useParams } from 'react-router';

function ManagerForm() {
    const { id } = useParams();
    let name;
    let email;
    let address;
    let pis;
    let user;
    let hiredAt;
    let createdAt;
    let updatedAt;
    let x = 0;

    const managers = JSON.parse(localStorage.getItem("managers"));

    for (let i = 0; i < managers.length; i ++) {
        if (managers[i].id == id) {
            name = managers[i].name;
            email = managers[i].email;
            address = managers[i].address;
            pis = managers[i].pis;
            user = managers[i].user;
            hiredAt = managers[i].hired_at;
            createdAt = managers[i].created_at;
            updatedAt = managers[i].updated_at;
            break;
        }
    }

    return (
        <div>
            <div className="messages">
            </div>
            <div className="form">
                <form action="/api/manager/" method="get">
                    <p>id = {id}</p>
                    <p>nome = {name}</p>
                    <p>usuario = {user}</p>
                    <p>email = {email}</p>
                    <p>endereço = {address}</p>
                    <p>pis = {pis}</p>
                    <p>contratado em = {hiredAt}</p>
                    <p>cadastrado em = {createdAt}</p>
                    <p>atualizado em = {updatedAt}</p>
                    <input className="btn" type="submit" value="Voltar"></input>
                </form>
            </div>
        </div>
    );
}

export default ManagerForm;