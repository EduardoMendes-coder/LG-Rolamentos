import { useState } from 'react';
import "./EmployeeForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function EmployeeForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [address, setAddress] = useState('');
    const [pis, setPis] = useState('');
    let [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [rg, setRg] = useState('');
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

    const handleAge = (e) => {
        setAge(e.target.value);
        setSubmitted(false);
    };

    const handleRg = (e) => {
        setRg(e.target.value);
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
        <div className="all">
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <h1 className="d-flex justify-content-center">Cadastro de Funcionários</h1>
            <div className="form">
                <form action="https://lg-rolamentos-api.herokuapp.com/add/" method="post">
                    <input onChange={handleName} className="form-control p-2"
                           value={name} type="text" name="name"
                           placeholder="Insira o Nome" />

                    <input onChange={handleEmail} className="form-control p-2 my-3"
                           value={email} type="email" name="email"
                           placeholder="Insira o Email"/>

                    <input onChange={handleAddress} className="form-control p-2"
                           value={address} type="text" name="address"
                           placeholder="Insira o Endereço"/>

                    <input onChange={handlePis} className="p-2 my-3 form-control"
                           value={pis} type="text" name="pis"
                           placeholder="Insira o PIS"/>

                    <label className="label">Sexo</label>
                    <select className="form-select p-2" onChange={handleSex} name="sex">
                        <option onChange={handleSex} value={sex = 'male'} name="sex">Masculino</option>
                        <option onChange={handleSex} value={sex = 'female'} name="sex">Feminino</option>
                        <option onChange={handleSex} value={sex = 'other'} name="sex">Outros...</option>
                    </select>

                    <input onChange={handleRole} className="form-control p-2 my-3"
                           value={role} type="text" name="role"
                           placeholder="Insira o Cargo"/>

                    <input onChange={handleAge} className="form-control p-2"
                           value={age} type="number" name="age"
                           placeholder="Insira a Idade"/>

                    <input onChange={handleRg} className="form-control p-2 my-3"
                           value={rg} type="number" name="rg"
                           placeholder="Insira o RG"/>

                    <input onChange={handleNationality} className="form-control p-2"
                           value={nationality} type="text" name="nationality"
                           placeholder="Insira a Nacionalidade"/>

                    <input onChange={handleSalary} className="form-control p-2 my-3"
                           value={salary} type="float" name="salary"
                           placeholder="Insira o Salário"/>

                    <input onChange={handlePhone} className="form-control p-2"
                           value={phone} type="number" name="phone"
                           placeholder="Insira o Telefone"/>

                    <label className="label mt-3">Contratado Em</label>
                    <input onChange={handleHiredAt} className="form-control p-3 mb-4"
                           value={hiredAt} type="date" name="hired_at"/>

                    <input type="hidden" name="is_active" value="true"></input>

                    <input className="btncad" type="submit" value="Cadastrar Funcionário"></input>
                </form>
            </div>
        </div>
    );
}

export default EmployeeForm;