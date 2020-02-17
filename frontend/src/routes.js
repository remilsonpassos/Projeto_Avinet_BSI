import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Gaiolas from './pages/Gaiolas';
import NewGaiolas from './pages/NewGaiolas';
import tabelas from './pages/tabelas';
import inicio from './pages/inicio';
import NewOvos from './pages/NewOvos';

function Routes() {
    return(
        
        <Switch>
            <Route path="/inicio" component={inicio}/>
            <Route path="/tabelas" component={tabelas}/>
        <Route path="/" exact component={Gaiolas}/>
        <Route path="/NewGaiolas" component={NewGaiolas}/>
        <Route path="/NewOvos" component={NewOvos}/>
        </Switch>
    );
}

export default Routes;