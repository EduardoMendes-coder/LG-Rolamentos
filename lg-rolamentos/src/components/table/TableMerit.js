import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import css from "./TableMerit.css";
import axios from 'axios';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import ButtonInsertMerit from "../buttons/InsertMerit";

let merits = []

const getMeritsList =  () => {
    const endpoint = 'http://127.0.0.1:8000/list-merit/';
    const response =  axios.get(endpoint)
        .then((res) => setMerits(res.data.Merits))
        .catch((err) => {
            console.log("Erro: avise o DEV: " + err)
        })
}

function setMerits(meritsAPI) {

    for (let i = 0; i < meritsAPI.length; i++) {
        merits.push(
            {
                id: meritsAPI[i].id,
                name: meritsAPI[i].name,
                employee: meritsAPI[i].employee,
                manager: meritsAPI[i].manager,
                created_at: meritsAPI[i].created_at,
                updated_at: meritsAPI[i].updated_at,
                note: meritsAPI[i].note
            }
        )
    }
    localStorage.setItem('merits', JSON.stringify(merits))
}

getMeritsList()
const new_merits = JSON.parse(localStorage.getItem("merits"));

const TableMerits = () => {
    return (
        <div className='containerMain'>
            <ButtonInsertMerit />
            <CardBody>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Funcionário</th>
                        <th>Data de Criação</th>
                        <th className="opAcao">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {new_merits.map((tdata, index) => (
                        <tr key={index} className="border-top">
                            <td>
                                <div className="d-flex align-items-center p-2">
                                    <div className="ms-3">
                                        <h6 className="mb-0">{tdata.name}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>{tdata.employee.name}</td>
                            <td>{tdata.created_at}</td>
                            <td>
                                <div className="acoes">
                                    <Button className="acao consultar" outline>
                                        <Link className="linkForm" to={"/api/activities/merits/formViewMerit/" + tdata.id}>Consultar</Link>
                                    </Button>
                                    <Button className="acao demitir" outline >
                                        <Link className="linkForm" to={"/api/activities/merits/formDeleteMerit/" + tdata.id}>Excluir</Link>
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


export default TableMerits;