import { useState } from 'react';
import css from "./FormViewMerit.css";
import { useParams } from 'react-router';

function FormViewMerit() {
    const { id } = useParams();
    let name;
    let employee;
    let manager;
    let createdAt;
    let updatedAt;
    let note;

    const merits = JSON.parse(localStorage.getItem("merits"));

    for (let i = 0; i < merits.length; i ++) {
        if (merits[i].id == id) {
            name = merits[i].name;
            employee = merits[i].employee.id;
            manager = merits[i].manager.id;
            createdAt = merits[i].created_at;
            updatedAt = merits[i].updated_at;
            note = merits[i].note;
            break;
        }
    }

    return (
        <div>
            <div className="messages">
            </div>
            <div className="form">
                <form action="/api/activities/merits" method="get">
                    <p>id = {id}</p>
                    <p>nome = {name}</p>
                    <p>funcionário = {employee}</p>
                    <p>gerente = {manager}</p>
                    <p>criado em = {createdAt}</p>
                    <p>atualizado em = {updatedAt}</p>
                    <p>notas = {note}</p>
                    <input className="btn" type="submit" value="Voltar"></input>
                </form>
            </div>
        </div>
    );
}

export default FormViewMerit;