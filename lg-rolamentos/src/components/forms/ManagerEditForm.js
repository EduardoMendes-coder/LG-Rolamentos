import { useState } from 'react';
import css from "./ManagerForm.css";
import { useParams } from 'react-router';

function ManagerEditForm() {
    const { id } = useParams();
    let old_name;
    let old_email;
    let old_address;
    let old_pis;
    let old_user;
    let old_hired_at;
    let old_is_active

    const managers = JSON.parse(localStorage.getItem("managers"));

    for (let i = 0; i < managers.length; i ++) {
        if (managers[i].id == id) {
            old_name = managers[i].name;
            old_email = managers[i].email;
            old_address = managers[i].address;
            old_pis = managers[i].pis;
            old_user = managers[i].user;
            old_hired_at = managers[i].hired_at;
            old_is_active = managers[i].is_active;
            break;
        }
    }

    const [name, setName] = useState(old_name);
    const [email, setEmail] = useState(old_email);
    //const [old_password, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [address, setAddress] = useState(old_address);
    const [pis, setPis] = useState(old_pis);
    const [user, setUser] = useState(old_user);
    const [newPassword, setConfirmPassword] = useState('');
    const [hiredAt, setHiredAt] = useState(old_hired_at);
    const [is_active, setIsActive] = useState(old_is_active);


    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleIsActive = (e) => {
        setIsActive(e.target.value);
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

    const handleNewPassword = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' ||  email === '' || password === '') {
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
                <form action={"http://127.0.0.1:8000/edit-manager/" + id + "/"} method="post">
                    <label className="label">Nome</label>
                    <input onChange={handleName} className="input"
                           value={name} type="text" name="name" />

                    {/* <label className="label">Email</label>  */}
                    <input onChange={handleEmail} className="input"
                           value={email} type="hidden" name="email"/>

                    <label className="label">EndereÃ§o</label>
                    <input onChange={handleAddress} className="input"
                           value={address} type="text" name="address"/>

                    <label className="label">PIS</label>
                    <input onChange={handlePis} className="input"
                           value={pis} type="text" name="pis"/>

                    <label className="label">Usuario</label>
                    <input onChange={handleUser} className="input"
                           value={user} type="text" name="user"/>

                    <label className="label">Senha</label>
                    <input onChange={handlePassword} className="input"
                           type="password" name="password" />

                    <label className="label">Nova Senha </label>
                    <input onChange={handleNewPassword} className="input"
                           type="password" name="new_password"/>

                    {/* <label className="label">Contratado Em</label>  */}
                    <input onChange={handleHiredAt} className="input"
                           value={hiredAt} type="hidden" name="hired_at"/>

                    <input onChange={handleIsActive} type="hidden" name="is_active" value={old_is_active}></input>

                    <input className="btn" type="submit" value="Submit"></input>

                </form>
            </div>
        </div>
    );
}

export default ManagerEditForm;