import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import css from './TableEmployee.css';
import ButtonInsertEmployee from "../buttons/InsertEmployee";
import CardStatusEmployee from "../cards/status/CardStatusEmployee";
import AcoesButtons from "../buttons/AcoesButtons";
import CardCotacao from "../cards/cotacoes/CardCotacao";


const tableData = [
    {
        name: "Shisue Lewin",
        email: "shisue@gmail.com",
        cargo: "Vendedor",
        status: "pending",
        dataAdmissao: "02/05/2020",
        opcoes: <AcoesButtons />
    },
    {
        name: "Nicholas Laplace",
        email: "laplace@gmail.com",
        cargo: "Caixa",
        status: "done",
        dataAdmissao: "11/05/2022",
        opcoes: <AcoesButtons />
    },
    {
        name: "Kayden K.",
        email: "kayden@gmail.com",
        cargo: "Estoque",
        status: "done",
        dataAdmissao: "23/09/2019",
        opcoes: <AcoesButtons />
    },
    {
        name: "Arquimedes",
        email: "arq@gmail.com",
        cargo: "Vendedor",
        status: "pending",
        dataAdmissao: "14/01/2015",
        opcoes: <AcoesButtons />
    },
    {
        name: "Pitagoras Samos",
        email: "pitagoras@gmail.com",
        cargo: "Vendedor",
        status: "done",
        dataAdmissao: "30/01/2017",
        opcoes: <AcoesButtons />
    },
];

const TableEmployee = () => {
    return (
        <div className='containerMain'>
            <CardCotacao />
            <CardStatusEmployee />
            <ButtonInsertEmployee />
            <CardBody>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Status</th>
                        <th>Data de Admissão</th>
                        <th className="opAcao">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((tdata, index) => (
                        <tr key={index} className="border-top">
                            <td>
                                <div className="d-flex align-items-center p-2">
                                    <div className="ms-3">
                                        <h6 className="mb-0">{tdata.name}</h6>
                                        <span className="text-muted">{tdata.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td>{tdata.cargo}</td>
                            <td>
                                {tdata.status === "pending" ? (
                                    <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                                ) : tdata.status === "holt" ? (
                                    <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                                ) : (
                                    <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                                )}
                            </td>
                            <td>{tdata.dataAdmissao}</td>
                            <td>{tdata.opcoes}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </CardBody>
        </div>
    );
};

export default TableEmployee;