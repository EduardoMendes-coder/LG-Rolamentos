import { useState } from 'react';
import { useParams } from 'react-router';

function EmployeeForm() {
    const { id } = useParams();
    let name;
    let email;
    let address;
    let pis;
    let hiredAt;
    let createdAt;
    let updatedAt;
    let x = 0;

    const employees = JSON.parse(localStorage.getItem("employees"));

    for (let i = 0; i < employees.length; i ++) {
        if (employees[i].id == id) {
            name = employees[i].name;
            email = employees[i].email;
            address = employees[i].address;
            pis = employees[i].pis;
            hiredAt = employees[i].hired_at;
            createdAt = employees[i].created_at;
            updatedAt = employees[i].updated_at;
            break;
        }
    }

    return (
        <div>
            <div className="messages">
            </div>
            <div className="form">
                <form action="/" method="get">
                    <p>id = {id}</p>
                    <p>nome = {name}</p>
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

export default EmployeeForm;