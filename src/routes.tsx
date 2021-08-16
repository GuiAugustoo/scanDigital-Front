import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Categorias } from './pages/Categorias';
import { Empresa } from './pages/Empresa';
import { Landing } from './pages/Landing';
import { Regras } from './pages/Regras';
import { Scan } from './pages/Scan';
import { Preferences } from './pages/PreferenciasInstancia';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/categorias" component={Categorias} />
                <Route path="/empresa" component={Empresa} />
                <Route path="/regras" component={Regras} />
                <Route path="/scan" component={Scan} />
                <Route path="/preferencias" component={Preferences} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

