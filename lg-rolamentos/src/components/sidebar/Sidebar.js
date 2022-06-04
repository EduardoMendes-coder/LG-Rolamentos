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
                        ERP ROLAMENTOS
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked" onClick="window.location.reload()">
                            <CDBSidebarMenuItem icon="home" >Home</CDBSidebarMenuItem >
                        </NavLink>
                        <NavLink exact to="/api/manager" activeClassName="activeClicked" onClick="window.location.reload()">
                            <CDBSidebarMenuItem icon="user">Gerente</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/api/activities" activeClassName="activeClicked" onClick="window.location.reload()">
                            <CDBSidebarMenuItem icon="table">Atividades</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/api/dashboard" activeClassName="activeClicked" onClick="window.location.reload()">
                            <CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/api/calculadora" activeClassName="activeClicked" onClick="window.location.reload()">
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
                        <Button className='sair'>Sair</Button>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;