import { useState } from "react";
import css from "./FormViewMerit.css";
import { useParams } from "react-router";
import userImg from "../img/AvatarUser.png";
import { Form } from "reactstrap";

function FormViewMerit() {
  const { id } = useParams();
  let name;
  let employee;
  let manager;
  let createdAt;
  let updatedAt;
  let note;

  const merits = JSON.parse(localStorage.getItem("merits"));

  for (let i = 0; i < merits.length; i++) {
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
    <div className="consul ps-5 pt-5">
      <div className="viewConsulta text-center p-4">
        <Form action="/api/activities/merits" method="get">
          <img className="mb-3" src={userImg} style={{ width: "120px" }}></img>
          <h5 className="pb-1">{name.toUpperCase()}</h5>
          <hr className="mb-4" size="4" width="100%" />
          <div className="allconsulta d-flex">
            <div className="info m-2 text-center">
              <h5 className="pt-3">Informações</h5>

              <p className="pt-2 fw-bold">ID</p>
              <p>{id}</p>

              <p className="pt-2 fw-bold">Atividade</p>
              <p>{name}</p>

              <p className="pt-2 fw-bold">ID Funcionário</p>
              <p>{employee}</p>

              <p className="pt-2 fw-bold">ID Gerente</p>
              <p>{manager}</p>
            </div>
            <div className="datas m-2 text-center">
              <h5 className="pt-3">Observação</h5>
              <p>{note}</p>
              <h5 className="pt-3">Datas</h5>
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
        </Form>
      </div>
    </div>
  );
}

export default FormViewMerit;
