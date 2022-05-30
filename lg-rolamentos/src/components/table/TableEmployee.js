import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import css from './TableEmployee.css';

const tableData = [
    {
        name: "Shisue Lewin",
        email: "shisue@gmail.com",
        cargo: "Vendedor",
        status: "pending",
        dataAdmissao: "02/05/2020",
    },
    {
        name: "Nicholas Laplace",
        email: "laplace@gmail.com",
        cargo: "Caixa",
        status: "done",
        dataAdmissao: "11/05/2022",
    },
    {
        name: "Kayden K.",
        email: "kayden@gmail.com",
        cargo: "Estoque",
        status: "done",
        dataAdmissao: "23/09/2019",
    },
    {
        name: "Arquimedes",
        email: "arq@gmail.com",
        cargo: "Vendedor",
        status: "pending",
        dataAdmissao: "14/01/2015",
    },
    {
        name: "Pitagoras Samos",
        email: "pitagoras@gmail.com",
        cargo: "Vendedor",
        status: "done",
        dataAdmissao: "30/01/2017",
    },
];

const TableEmployee = () => {
    return (
        <div className='container'>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Project Listing</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Overview of the projects
                    </CardSubtitle>

                    <Table className="no-wrap mt-3 align-middle" responsive borderless>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Status</th>
                            <th>Data de Admissão</th>
                            <th>Ações</th>
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
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};

export default TableEmployee;