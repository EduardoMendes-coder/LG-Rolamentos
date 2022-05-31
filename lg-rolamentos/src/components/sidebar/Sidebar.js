import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import css from './Sidebar.css';
import {Button} from "rsuite";

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }} className='sidebar'>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'red' }}>
                        LG-ROLAMENTOS
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="home" >Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/employee" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Funcionários</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/manager" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="users">Gerente</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/form" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Atividades</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/calculadora" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="calculator">Calculadora</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        <Button style={{color: 'red'}}>Sair</Button>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;