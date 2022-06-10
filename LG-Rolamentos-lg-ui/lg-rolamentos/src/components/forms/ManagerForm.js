import { useState } from 'react';
import css from "./ManagerForm.css";

function ManagerForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [address, setAddress] = useState('');
    const [pis, setPis] = useState('');
    const [user, setUser] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hiredAt, setHiredAt] = useState('');


    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleHiredAt = (e) => {
        setHiredAt(e.target.value);
        setSubmitted(false);
    };

    const handleUser = (e) => {
        setUser(e.target.value);
        setSubmitted(false);
    };

    const handlePis = (e) => {
        setPis(e.target.value);
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

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    }

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
        <div className='Principal' >
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <h1 className="d-flex justify-content-center">Cadastro de Gerentes</h1>
            <div className="form">
                <form action="https://lg-rolamentos-api.herokuapp.com/add-manager/" method="post">
                    <input onChange={handleName} placeholder="Nome" className="input"
                           value={name} type="text" name="name" />

                    <input onChange={handleEmail} placeholder="Email" className="input"
                           value={email} type="email" name="email"/>

                    <input onChange={handleAddress} placeholder="Endereço" className="input"
                           value={address} type="text" name="address"/>

                    <input onChange={handlePis} placeholder="PIS" className="input"
                           value={pis} type="text" name="pis"/>

                    <input onChange={handleUser} placeholder="Usuario" className="input"
                           value={user} type="text" name="user"/>

                    <input onChange={handlePassword} placeholder="Senha" className="input"
                           value={password} type="password" name="password" />

                    <input onChange={handleConfirmPassword} placeholder="Confirmar Senha" className="input"
                           value={confirmPassword} type="password" name="confirm_password"/>

                    <label className="label">Contratado Em</label>
                    <input onChange={handleHiredAt} className="input"
                           value={hiredAt} type="date" name="hired_at"/>

                    <input type="hidden" name="is_active" value="true"></input>

                    <input className="btn" type="submit"  value="Cadastrar Gerente"></input>
                </form>
            </div>
        </div>
    );
}

export default ManagerForm;