import { useState } from "react";
import { useParams } from "react-router";
import "./EmployeeViewForm.css";
import userImg from "../img/AvatarUser.png";

function EmployeeForm() {
  const { id } = useParams();
  let name;
  let email;
  let address;
  let pis;
  let salary;
  let rg;
  let hiredAt;
  let createdAt;
  let updatedAt;
  let x = 0;

  const employees = JSON.parse(localStorage.getItem("employees"));

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id == id) {
      name = employees[i].name;
      email = employees[i].email;
      address = employees[i].address;
      pis = employees[i].pis;
      salary = employees[i].salary;
      rg = employees[i].rg;
      hiredAt = employees[i].hired_at;
      createdAt = employees[i].created_at;
      updatedAt = employees[i].updated_at;
      break;
    }
  }

  let dateContrato = new Date(hiredAt);
  let dateCadastro = new Date(createdAt);

  let dateAtualizado = new Date(updatedAt);
  let atualizadoDay = dateAtualizado.getUTCDate();
  let atualizadoMonth = dateAtualizado.getUTCMonth() + 1;
  let atualizadoYear = dateAtualizado.getUTCFullYear();

  if (updatedAt == null) {
    atualizadoDay = "";
    atualizadoMonth = "";
    atualizadoYear = "";
  }

  return (
    <div className="consulta ps-5">
      <h1 className="d-flex justify-content-center align-items-center">
        Consulta de Funcionários
      </h1>
      <div className="formconsultar">
        <form action="/" method="get">
          <div className="viewConsulta text-center p-4">
            <img
              className="mb-3"
              src={userImg}
              style={{ width: "120px" }}
            ></img>
            <h5 className="pb-1">{name.toUpperCase()}</h5>
            <hr className="mb-4" size="4" width="100%" />
            <div className="allconsulta d-flex">
              <div className="info m-2 text-center">
                <h5 className="pt-3">Informações</h5>

                <p className="pt-2 fw-bold">Nome</p>
                <p>{name}</p>

                <p className="pt-2 fw-bold">Email</p>
                <p>{email}</p>

                <p className="pt-2 fw-bold">Endereço</p>
                <p>{address}</p>

                <p className="pt-2 fw-bold">Registro Geral</p>
                <p>{rg}</p>

                <p className="pt-2 fw-bold">PIS</p>
                <p>{pis}</p>

                <p className="pt-2 fw-bold">Salário</p>
                <p>{salary}</p>
              </div>
              <div className="datas m-2 text-center">
                <h5 className="pt-3">Datas</h5>
                <p className="p-3">
                  Contratado no dia {dateContrato.getUTCDate()} do mês{" "}
                  {dateContrato.getUTCMonth() + 1} de{" "}
                  {dateContrato.getUTCFullYear()}
                </p>
                <p className="p-3">
                  Cadastrado no dia {dateCadastro.getUTCDate()} do mês{" "}
                  {dateCadastro.getUTCMonth() + 1} de{" "}
                  {dateCadastro.getUTCFullYear()}
                </p>
                <p className="p-3">
                  Atualizado no dia {atualizadoDay} do mês {atualizadoMonth} de{" "}
                  {atualizadoYear}
                </p>
              </div>
            </div>
            <input className="btn mt-5" type="submit" value="Voltar"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
