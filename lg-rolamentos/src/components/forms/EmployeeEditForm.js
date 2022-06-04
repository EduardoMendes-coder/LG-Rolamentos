import { useState } from 'react';
import css from "./EmployeeEditForm.css";
import { useParams } from 'react-router';

export default function EmployeeEditForm() {
    const { id } = useParams();
    let old_name;
    let old_email;
    let old_address;
    let old_pis;
    let old_sex;
    let old_role;
    let old_age;
    let old_rg;
    let old_nationality;
    let old_salary;
    let old_phone;
    let old_hired_at;
    let old_is_active

    const employees = JSON.parse(localStorage.getItem("employees"));

    for (let i = 0; i < employees.length; i ++) {
        if (employees[i].id == id) {
            old_name = employees[i].name;
            old_email = employees[i].email;
            old_address = employees[i].address;
            old_pis = employees[i].pis;
            old_sex = employees[i].sex;
            old_role = employees[i].role;
            old_age = employees[i].age;
            old_rg = employees[i].rg;
            old_nationality = employees[i].nationality;
            old_salary = employees[i].salary;
            old_phone = employees[i].phone;
            old_hired_at = employees[i].hired_at;
            old_is_active = employees[i].is_active;
            break;
        }
    }

    const [name, setName] = useState(old_name);
    const [email, setEmail] = useState(old_email);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [address, setAddress] = useState(old_address);
    const [pis, setPis] = useState(old_pis);
    let [sex, setSex] = useState(old_sex);
    const [age, setAge] = useState(old_age);
    const [rg, setRg] = useState(old_rg);
    const [role, setRole] = useState(old_role);
    const [nationality, setNationality] = useState(old_nationality);
    const [salary, setSalary] = useState(old_salary);
    const [phone, setPhone] = useState(old_phone);
    const [hiredAt, setHiredAt] = useState(old_hired_at);
    const [is_active, setIsActive] = useState(old_is_active);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    const handleHiredAt = (e) => {
        setHiredAt(e.target.value);
        setSubmitted(false);
    };

    const handleIsActive = (e) => {
        setIsActive(e.target.value);
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
        <div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <div className="form">
                <form action={"http://127.0.0.1:8000/edit/" + id + "/"} method="post">
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

                    <label className="label">Age</label>
                    <input onChange={handleAge} className="input"
                           value={age} type="number" name="age"/>

                    <label className="label">RG</label>
                    <input onChange={handleRg} className="input"
                           value={rg} type="number" name="rg"/>

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

                    <input onChange={handleIsActive} type="hidden" name="is_active" value={old_is_active}></input>

                    <input type="hidden" name="is_active" value="true"></input>

                    <input className="btn" type="submit" value="Submit"></input>

                </form>
            </div>
        </div>
    );
}