import { useState } from 'react';
import css from "./EmployeeForm.css";

function EmployeeForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [address, setAddress] = useState('');
    const [pis, setPis] = useState('');
    let [sex, setSex] = useState('');
    const [role, setRole] = useState('');
    const [nationality, setNationality] = useState('');
    const [salary, setSalary] = useState('');
    const [phone, setPhone] = useState('');
    const [hiredAt, setHiredAt] = useState('');


    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleHiredAt = (e) => {
        setHiredAt(e.target.value);
        setSubmitted(false);
    };

    const handlePis = (e) => {
        setPis(e.target.value);
        setSubmitted(false);
    };

    const handleSex = (e) => {
        setSex(e.target.value);
        setSubmitted(false);
    };

    const handleRole = (e) => {
        setRole(e.target.value);
        setSubmitted(false);
    };

    const handleNationality = (e) => {
        setNationality(e.target.value);
        setSubmitted(false);
    };

    const handleSalary = (e) => {
        setSalary(e.target.value);
        setSubmitted(false);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '') {
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
                <form action="http://127.0.0.1:8000/add/" method="post">
                    <label className="label">Nome</label>
                    <input onChange={handleName} className="input"
                           value={name} type="text" name="name" />

                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                           value={email} type="email" name="email"/>

                    <label className="label">Endereço</label>
                    <input onChange={handleAddress} className="input"
                           value={address} type="text" name="address"/>

                    <label className="label">PIS</label>
                    <input onChange={handlePis} className="input"
                           value={pis} type="text" name="pis"/>

                    <label className="label">Sexo</label>
                    <select onChange={handleSex} name="sex">
                        <option onChange={handleSex} value={sex = 'male'} name="sex">male</option>
                        <option onChange={handleSex} value={sex = 'female'} name="sex">female</option>
                        <option onChange={handleSex} value={sex = 'other'} name="sex">other</option>
                    </select>

                    <label className="label">Cargo</label>
                    <input onChange={handleRole} className="input"
                           value={role} type="text" name="role"/>

                    <label className="label">Nacionalidade</label>
                    <input onChange={handleNationality} className="input"
                           value={nationality} type="text" name="nationality"/>

                    <label className="label">Salário</label>
                    <input onChange={handleSalary} className="input"
                           value={salary} type="float" name="salary"/>

                    <label className="label">Telefone</label>
                    <input onChange={handlePhone} className="input"
                           value={phone} type="number" name="phone"/>

                    <label className="label">Contratado Em</label>
                    <input onChange={handleHiredAt} className="input"
                           value={hiredAt} type="date" name="hired_at"/>

                    <input type="hidden" name="is_active" value="true"></input>

                    <input className="btn" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default EmployeeForm;