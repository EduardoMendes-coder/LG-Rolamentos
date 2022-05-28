import { useState } from 'react';
import css from "./EmployeeForm.css";

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
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
                <h1>User {name} successfully registered!!</h1>
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
                <form>
                    <label className="label">Nome</label>
                    <input onChange={handleName} className="input"
                           value={name} type="text" />

                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                           value={email} type="email" />

                    <label className="label">Idade</label>
                    <input onChange='' className="input"
                           value='' type="number" />

                    <label className="label">Endereço</label>
                    <input onChange='' className="input"
                           value='' type="text" />

                    <label className="label">RG</label>
                    <input onChange='' className="input"
                           value='' type="number" />

                    <label className="label">PIS</label>
                    <input onChange='' className="input"
                           value='' type="number" />

                    <label className="label">Cargo</label>
                    <input onChange='' className="input"
                           value='' type="text" />

                    <label className="label">Nacionalidade</label>
                    <input onChange='' className="input"
                           value='' type="text" />

                    <label className="label">Salário</label>
                    <input onChange='' className="input"
                           value='' type="number" />

                    <label className="label">Telefone</label>
                    <input onChange='' className="input"
                           value='' type="number" />

                    <label className="label">Sexo</label>
                    <input onChange='' className="input"
                           value='' type="text" />

                    <label className="label">Senha</label>
                    <input onChange={handlePassword} className="input"
                           value={password} type="password" />

                    <label className="label">Confirmar senha</label>
                    <input onChange={handlePassword} className="input"
                           value={password} type="password" />

                    <button onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}