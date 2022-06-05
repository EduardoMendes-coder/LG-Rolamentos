// import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
// import css from "./TableAdvertence.css";
// import axios from 'axios';
// import {Button} from "reactstrap";
// import {Link} from "react-router-dom";
// import InsertAdvertence from "../buttons/InsertAdvertence";
//
// let advertences = []
//
// const getAdvertencesList =  () => {
//     const endpoint = 'http://127.0.0.1:8000/list-advertence/';
//     const response =  axios.get(endpoint)
//         .then((res) => setAdvertences(res.data.Advertences))
//         .catch((err) => {
//             console.log("Erro: avise o DEV: " + err)
//         })
// }
//
// function setAdvertences(advertencesAPI) {
//
//     for (let i = 0; i < advertencesAPI.length; i++) {
//         advertencesAPI.push(
//             {
//                 id: advertencesAPI[i].id,
//                 name: advertencesAPI[i].name,
//                 employee: advertencesAPI[i].employee,
//                 manager: advertencesAPI[i].manager,
//                 created_at: advertencesAPI[i].created_at,
//                 updated_at: advertencesAPI[i].updated_at,
//                 note: advertencesAPI[i].note
//             }
//         )
//     }
//     localStorage.setItem('advertences', JSON.stringify(advertences))
// }
//
// getAdvertencesList()
// const new_advertences = JSON.parse(localStorage.getItem("advertences"));
//
// const TableAdvertence = () => {
//     return (
//         <div className='containerMain'>
//             <InsertAdvertence />
//             <CardBody>
//                 <Table className="no-wrap mt-3 align-middle" responsive borderless>
//                     <thead>
//                     <tr>
//                         <th>Descrição</th>
//                         <th>Funcionário</th>
//                         <th>Data de Criação</th>
//                         <th className="opAcao">Ações</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {new_advertences.map((tdata, index) => (
//                         <tr key={index} className="border-top">
//                             <td>
//                                 <div className="d-flex align-items-center p-2">
//                                     <div className="ms-3">
//                                         <h6 className="mb-0">{tdata.name}</h6>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td>{tdata.employee.name}</td>
//                             <td>{tdata.created_at}</td>
//                             <td>
//                                 <div className="acoes">
//                                     <Button className="acao consultar" outline>
//                                         <Link className="linkForm" to={"/api/activities/advertences/formViewAdvertence/" + tdata.id}>Consultar</Link>
//                                     </Button>
//                                     <Button className="acao demitir" outline >
//                                         <Link className="linkForm" to={"/api/activities/advertences/formDeleteAdvertence/" + tdata.id}>Excluir</Link>
//                                     </Button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </Table>
//             </CardBody>
//         </div>
//     );
// };
//
//
// export default TableAdvertence;