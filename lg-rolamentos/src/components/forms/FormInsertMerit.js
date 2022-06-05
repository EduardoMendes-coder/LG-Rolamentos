import { useState } from 'react';
import css from "./FormInsertMerit.css";

function FormInsertMerit() {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [employee, setEmployee] = useState('');
    const [manager, setManager] = useState('');
    const [note, setNote] = useState('');


    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleEmployee = (e) => {
        setEmployee(e.target.value);
        setSubmitted(false);
    };

    const handleManager = (e) => {
        setManager(e.target.value);
        setSubmitted(false);
    };

    const handleNote = (e) => {
        setNote(e.target.value);
        setSubmitted(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>Manager {name} successfully registered!!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <div className="form">
                <form action="http://127.0.0.1:8000/add-merit/" method="post">
                    <label className="label">Nome</label>
                    <input onChange={handleName} className="input"
                           value={name} type="text" name="name" />

                    <label className="label">ID Funcionário</label>
                    <input onChange={handleEmployee} className="input"
                           value={employee} type="number" name="employee" />

                    <label className="label">ID Gerente</label>
                    <input onChange={handleManager} className="input"
                           value={manager} type="number" name="manager" />

                    <label className="label">Nota</label>
                    <input onChange={handleNote} className="input"
                           value={note} type="text" name="note" />

                    <input type="hidden" name="is_active" value="true"></input>

                    <input className="btn" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default FormInsertMerit;