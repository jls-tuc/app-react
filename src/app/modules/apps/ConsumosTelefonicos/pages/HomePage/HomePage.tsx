import React from 'react';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import {  EmpresaPage, ConsumoPage } from '..';
import { PageLink, PageTitle } from '../../../../../../_metronic/layout/core'
import { LineaGrid, MainMenu } from '../../components'


const telefoniaBreadCrumbs: Array<PageLink> = [
    {
        title: 'Dashboard',
        path: '',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const HomePage: React.FC = () => {
    const { url } = useRouteMatch();
    
    return (
        <BrowserRouter>
            <PageTitle breadcrumbs={telefoniaBreadCrumbs}>Consumos telefónicos</PageTitle>
            <div className={`card`}>
                {/* begin::Header */}
                <div className='card-header align-items-center border-0 mt-4'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='fw-bolder mb-2 text-dark'>Gestión de Consumos Telefónicos</span>
                    </h3>
                    <MainMenu />


                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='row'>
                    <div className='col-2 card-body'>
                        <Switch>
                        <Route exact path={`${url}/`} component={LineaGrid} />
                        <Route exact path={`${url}/companies`} component={EmpresaPage} />
                        <Route exact path={`${url}/consumos`} component={ConsumoPage} />
                        </Switch>
                    </div>
                </div>
                {/* end: Card Body */}
            </div>

        </BrowserRouter>
    )
};

export default HomePage;