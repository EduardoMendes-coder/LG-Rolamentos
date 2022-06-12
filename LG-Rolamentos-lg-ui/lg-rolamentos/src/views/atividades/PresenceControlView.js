import "./PresenceControlView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

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
    <div>
      <div className="form">
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
          <label className="label">Funcionarios</label>
          <div>
            <select
              className="form-select"
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
          <label>De</label>
          <input
            onChange={handleFromDate}
            className="input"
            value={fromDate}
            type="date"
            name="start_date"
            data-date=""
            data-date-format="DD MMMM YYYY"
          ></input>
          <lable>Ate</lable>
          <input
            onChange={handleToDate}
            className="input"
            value={toDate}
            type="date"
            name="end_date"
            data-date=""
            data-date-format="DD MMMM YYYY"
          ></input>
          <input className="btn" type="submit" value="Pesquisar"></input>
        </form>
      </div>
    </div>
  );
}

export default PresenceControlView;
