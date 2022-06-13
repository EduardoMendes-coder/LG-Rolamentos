import "./PresenceControlView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FormText } from "reactstrap";

function PresenceControlView() {
  const employees = JSON.parse(localStorage.getItem("employees"));
  let [employeeId, setEmployeeId] = useState(employees[0].id);
  const [fromDate, setFromDate] = useState("2022-01-01");
  const [toDate, setToDate] = useState("2022-12-31");
  const [submitted, setSubmitted] = useState(false);

  const handleFromDate = (e) => {
    setFromDate(e.target.value);
    setSubmitted(false);
  };
  const handleToDate = (e) => {
    setToDate(e.target.value);
    setSubmitted(false);
  };
  const handleEmployeeId = (e) => {
    setEmployeeId(e.target.value);
    setSubmitted(false);
  };

  return (
    <div className="formPresence">
      <div className="formPresence">
        <h1 className="d-flex justify-content-center">Controle de Presença</h1>
        <form
          action={
            "https://lg-rolamentos-api.herokuapp.com/get-presences/" +
            employeeId +
            "/" +
            fromDate +
            "/" +
            toDate
          }
          method="get"
        >
          <label className="label mt-4">Funcionarios</label>
          <div className="Pesquisa">
            <select
              className="form-select w-100"
              onChange={handleEmployeeId}
              name="employee_id"
            >
              {employees.map((tdata, index) => (
                <option
                  key={index}
                  onChange={handleEmployeeId}
                  name="employee_id"
                  value={(employeeId = tdata.id)}
                >
                  <h6 className="mb-0">{tdata.name}</h6>
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label mt-3">Presença</label>
            <select className="form-select w-100 p-2" name="Presence">
              <option name="Presence">Manhã</option>
              <option name="Presence">Não compareceu</option>
              <option name="Presence">Tarde</option>
            </select>
          </div>
          <div>
            <label className="label mt-3">Descontos</label>
            <select className="form-select w-100 p-2" name="descDia">
              <option name="descDia">Descontar Dia</option>
              <option name="descDia">Não Descontar</option>
              <option name="descDia">Descontar Metade</option>
            </select>
          </div>
          <div>
            <label className="label mt-3">Justificativa</label>
            <textarea
              type="text"
              name="Justificativa"
              className="Justificativa"
              maxlength="150"
            ></textarea>
          </div>
          <div className="d-flex flex-column">
            <input
              onChange={handleFromDate}
              className="dt_Presenca"
              value={fromDate}
              type="date"
              name="start_date"
              data-date=""
              data-date-format="DD MMMM YYYY"
              placeholder="data"
            ></input>
            <FormText className="ms-1 mb-1">
              Data a ser registrada como falta
            </FormText>
          </div>

          <input
            className="btnPresence mb-5 p-3"
            type="submit"
            value="Cadastrar Falta"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default PresenceControlView;
