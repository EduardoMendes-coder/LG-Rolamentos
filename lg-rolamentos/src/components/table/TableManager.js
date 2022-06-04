import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import css from "./TableManager.css";
import CardStatusManager from "../cards/status/CardStatusManager";
import InsertManager from "../buttons/InsertManager";
import axios from 'axios';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

let managers = []

const getManagersList =  () => {
    const endpoint = 'http://127.0.0.1:8000/list-manager/';
    const response =  axios.get(endpoint)
        .then((res) => setManagers(res.data.Managers))
        .catch((err) => {
            console.log("Erro: avise o DEV: " + err)
        })
}

function setManagers(managersAPI) {
    let actives = 0
    let inactives = 0

    for (let i = 0; i < managersAPI.length; i++) {
        managers.push(
            {
                id: managersAPI[i].id,
                name: managersAPI[i].name,
                user: managersAPI[i].user,
                email: managersAPI[i].email,
                pis: managersAPI[i].pis,
                address: managersAPI[i].address,
                is_active: managersAPI[i].is_active,
                hired_at: managersAPI[i].hired_at,
                created_at: managersAPI[i].created_at,
                updated_at: managersAPI[i].updated_at,
                //options: <AcoesButtons />,
            }
        )
        if (managersAPI[i].is_active === true) {
            actives += 1
        }
        else if (managersAPI[i].is_active === false) {
            inactives += 1
        }
    }
    localStorage.setItem('managers', JSON.stringify(managers))
    localStorage.setItem('actives', JSON.stringify(actives))
    localStorage.setItem('inactives', JSON.stringify(inactives))
}

getManagersList()
const new_managers = JSON.parse(localStorage.getItem("managers"));

const TableManager = () => {
    return (
        <div className='containerMain'>
            <CardStatusManager />
            <InsertManager />
            <CardBody>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Usuario</th>
                        <th>Status</th>
                        <th>Data de Admissão</th>
                        <th className="opAcao">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {new_managers.map((tdata, index) => (
                        <tr key={index} className="border-top">
                            <td>
                                <div className="d-flex align-items-center p-2">
                                    <div className="ms-3">
                                        <h6 className="mb-0">{tdata.name}</h6>
                                        <span className="text-muted">{tdata.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td>{tdata.user}</td>
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
                                    <Button className="acao consultar" outline>
                                        <Link className="linkForm" to={"/api/manager/formViewManager/" + tdata.id}>Consultar</Link>
                                    </Button>
                                    <Button className="acao editar" outline>
                                        <Link className="linkForm" to={"/api/manager/formEditManager/" + tdata.id}>Editar</Link>
                                    </Button>
                                    <Button className="acao demitir" outline>
                                        <Link className="linkForm" to={"/api/manager/formInactiveManager/" + tdata.id}>Demitir</Link>
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


export default TableManager;