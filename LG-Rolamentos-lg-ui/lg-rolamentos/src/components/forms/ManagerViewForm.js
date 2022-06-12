import { useState } from 'react';
import { useParams } from 'react-router';
import userImg from "../img/AvatarUser.png";
import "./ManagerViewForm.css";
function ManagerForm() {
    const { id } = useParams();
    let name;
    let email;
    let address;
    let pis;
    let user;
    let hiredAt;
    let createdAt;
    let updatedAt;
    let x = 0;

    const managers = JSON.parse(localStorage.getItem("managers"));

    for (let i = 0; i < managers.length; i ++) {
        if (managers[i].id == id) {
            name = managers[i].name;
            email = managers[i].email;
            address = managers[i].address;
            pis = managers[i].pis;
            user = managers[i].user;
            hiredAt = managers[i].hired_at;
            createdAt = managers[i].created_at;
            updatedAt = managers[i].updated_at;
            break;
        }
    }
    let dateContrato = new Date(hiredAt);
    let dateCadastro = new Date(createdAt);
    let dateAtualizado = new Date(updatedAt);

    return (
        <div className='consultaGerente ps-5'>
            <div className='messages'></div>
            <div className='formconsultarGerente'>
                <form action='/api/manager' method='get'>
                    <div className='viewConsultaGerente text-center p-4'>
                        <img className='mb-3'
                            src={userImg}
                            style={{ width: "120px" }}
                        ></img>
                        <h5 className='pb-1'>{name.toUpperCase()}</h5>
                        <hr className='mb-4' size='4' width="100%"></hr>
                        <div className='allconsultaGerente d-flex'>
                            <div className='infoGerente m-2 text-center'>
                                <h5 className='pt-3'>Informações do Gerente</h5>
                                <p className="pt-2 fw-bold">Nome</p>
                                <p>{name}</p>
                                <p className="pt-2 fw-bold">Email</p>
                                <p>{email}</p>
                                <p className="pt-2 fw-bold">Endereço</p>
                                <p>{address}</p>
                                <p className="pt-2 fw-bold">PIS</p>
                                <p>{pis}</p>
                            </div>
                            <div className='datasGerente m-2 text-center'>
                                <h5 className='pt-3'>Datas</h5>
                                <p className='p-3'>
                                    Contratado no dia {dateContrato.getUTCDate()} do mês {" "}
                                    {dateContrato.getUTCMonth() + 1} de {" "}
                                    {dateContrato.getFullYear()}
                                </p>
                                <p className="p-3">
                                    Cadastrado no dia {dateCadastro.getUTCDate()} do mês{" "}
                                    {dateCadastro.getUTCMonth() + 1} de{" "}
                                    {dateCadastro.getUTCFullYear()}
                                </p>
                            </div>
                        </div>
                        <input className="btn mt-5" type="submit" value="Voltar"></input>
                    </div>
                </form>

            </div>

       </div>
    );
}

export default ManagerForm;