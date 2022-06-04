import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import css from './TableEmployee.css';
import CardStatusEmployee from "../cards/status/CardStatusEmployee";
import AcoesButtons from "../buttons/AcoesButtons";
import CardCotacao from "../cards/cotacoes/CardCotacao";
import axios from 'axios';
import InsertEmployee from "../buttons/InsertEmployee";

let employees = []

const getEmployeeList =  () => {
    const endpoint = 'http://127.0.0.1:8000/list/';
    const response =  axios.get(endpoint)
        .then((res) => setEmployees(res.data.teste))
        .catch((err) => {
            console.log("Erro: avise o DEV: " + err)
        })
}

function setEmployees(employeesAPI) {
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
    }
    localStorage.setItem('employees', JSON.stringify(employees))
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
                            <td>{<AcoesButtons />}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </CardBody>
        </div>
    );
};

export default TableEmployee;