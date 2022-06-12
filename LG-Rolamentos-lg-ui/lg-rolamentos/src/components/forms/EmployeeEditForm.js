import { useState } from "react";
import "./EmployeeEditForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { FormText } from "reactstrap";

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
  let old_is_active;

  const employees = JSON.parse(localStorage.getItem("employees"));

  for (let i = 0; i < employees.length; i++) {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  var dateContrato = new Date(hiredAt);

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Manager {name} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="editeform d-flex justify-content-center flex-column">
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <h1 className="d-flex justify-content-center">Editar Funcionário</h1>
      <div className="former">
        <form
          action={"https://lg-rolamentos-api.herokuapp.com/edit/" + id + "/"}
          method="post"
        >
          <input
            onChange={handleName}
            className="form-control p-2"
            value={name}
            type="text"
            name="name"
            placeholder="Insira o Nome"
            maxLength={50}
          />
          <FormText>Nome</FormText>

          <input
            onChange={handleEmail}
            className="form-control p-2 mt-3"
            value={email}
            type="email"
            name="email"
            placeholder="Insira o Email"
            maxLength={50}
          />
          <FormText>Email</FormText>

          <input
            onChange={handleAddress}
            className="form-control p-2 mt-3"
            value={address}
            type="text"
            name="address"
            placeholder="Insira o Endereço"
            maxLength={150}
          />
          <FormText>Endereço</FormText>

          <input
            onChange={handlePis}
            className="p-2 mt-3 form-control"
            value={pis}
            type="text"
            name="pis"
            placeholder="Insira o PIS"
            maxLength={12}
          />
          <FormText>PIS</FormText>

          <select
            className="form-select p-2 mt-3"
            onChange={handleSex}
            name="sex"
          >
            <option onChange={handleSex} value={(sex = "male")} name="sex">
              Masculino
            </option>
            <option onChange={handleSex} value={(sex = "female")} name="sex">
              Feminino
            </option>
            <option onChange={handleSex} value={(sex = "other")} name="sex">
              Outros...
            </option>
          </select>
          <FormText>Sexo</FormText>

          <input
            onChange={handleRole}
            className="form-control p-2 mt-3"
            value={role}
            type="text"
            name="role"
            maxLength={30}
            placeholder="Insira o Cargo"
          />
          <FormText>Cargo</FormText>

          <input
            onChange={handleRg}
            className="form-control p-2 mt-3"
            value={rg}
            type="number"
            name="rg"
            placeholder="Insira o RG"
            maxLength={12}
          />
          <FormText>RG</FormText>

          <input
            onChange={handleNationality}
            className="form-control p-2 mt-3"
            value={nationality}
            type="text"
            name="nationality"
            placeholder="Insira a Nacionalidade"
            maxLength={50}
          />
          <FormText>Nacionalidade</FormText>

          <input
            onChange={handleSalary}
            className="form-control p-2 mt-3"
            value={salary}
            type="float"
            name="salary"
            placeholder="Insira o Salário"
          />
          <FormText>Salário</FormText>

          <input
            onChange={handlePhone}
            className="form-control p-2 mt-3"
            value={phone}
            type="number"
            name="phone"
            placeholder="Insira o Telefone"
            maxLength={20}
          />
          <FormText>Telefone</FormText>

          <label className="label mt-3"></label>
          <input
            onChange={handleHiredAt}
            className="form-control p-3"
            value={hiredAt}
            type="date"
            name="hired_at"
          />
          <FormText>
            Contratado no dia {dateContrato.getUTCDate()} do mês{" "}
            {dateContrato.getUTCMonth() + 1} de {dateContrato.getUTCFullYear()}
          </FormText>

          <input
            onChange={handleIsActive}
            type="hidden"
            name="is_active"
            value={old_is_active}
          ></input>

          <input type="hidden" name="is_active" value="true"></input>

          <input
            className="btn mt-4"
            type="submit"
            value="Salvar Edição"
            to={"/"}
          ></input>
        </form>
      </div>
    </div>
  );
}
