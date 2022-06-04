import {Card, CardBody, CardTitle, CardSubtitle, Table} from "reactstrap";
import css from './TableEmployee.css';
import CardStatusEmployee from "../cards/status/CardStatusEmployee";
import CardCotacao from "../cards/cotacoes/CardCotacao";
import axios from 'axios';
import InsertEmployee from "../buttons/InsertEmployee";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

let employees = []

const getEmployeeList =  () => {
    const endpoint = 'http://127.0.0.1:8000/list/';
    const response =  axios.get(endpoint)
        .then((res) => setEmployees(res.data.Employees))
        .catch((err) => {
            console.log("Erro: avise o DEV: " + err)
        })
}

function setEmployees(employeesAPI) {
    let actives = 0
    let inactives = 0

    for (let i = 0; i < employeesAPI.length; i++) {
        employees.push(
            {
                id: employeesAPI[i].id,
                name: employeesAPI[i].name,
                email: employeesAPI[i].email,
                pis: employeesAPI[i].pis,
                address: employeesAPI[i].address,
                is_active: employeesAPI[i].is_active,
                hired_at: employeesAPI[i].hired_at,
                created_at: employeesAPI[i].created_at,
                updated_at: employeesAPI[i].updated_at,
            }
        )
        if (employeesAPI[i].is_active === true) {
            actives += 1
        }
        else if (employeesAPI[i].is_active === false) {
            inactives += 1
        }
    }
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('activesEmployee', JSON.stringify(actives))
    localStorage.setItem('inactivesEmployee', JSON.stringify(inactives))
}

getEmployeeList()
const new_employees = JSON.parse(localStorage.getItem("employees"));

const TableEmployee = () => {
    return (
        <div className='containerMain'>
            <CardCotacao />
            <CardStatusEmployee />
            <InsertEmployee />
            <CardBody>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Data de Admissão</th>
                        <th className="opAcao">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {new_employees.map((tdata, index) => (
                        <tr key={index} className="border-top">
                            <td>
                                <div className="d-flex align-items-center p-2">
                                    <div className="ms-3">
                                        <h6 className="mb-0">{tdata.name}</h6>
                                        <span className="text-muted">{tdata.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {tdata.is_active === true ? (
                                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                                ) : tdata.is_active === false ? (
                                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                                ) : (
                                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                                )}
                            </td>
                            <td>{tdata.hired_at}</td>
                            <td>
                                <div className="acoes">
                                    <Button className="acaoE consultar" outline>
                                        <Link className="linkForm" to={"/api/employee/formViewEmployee/" + tdata.id}>Consultar</Link>
                                    </Button>
                                    <Button className="acaoE editar" outline>
                                        <Link className="linkForm" to={"/api/employee/formEditEmployee/" + tdata.id}>Editar</Link>
                                    </Button>
                                    <Button className="acaoE demitir" outline>
                                        <Link className="linkForm" to={"/api/manager/formInactiveEmployee/" + tdata.id}>Demitir</Link>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </CardBody>
        </div>
    );
};

export default TableEmployee;