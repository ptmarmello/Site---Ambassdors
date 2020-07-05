import React from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';


import Login from './pages/Login';
import Signup from './pages/SignUp';
import SUThanks from './pages/signupThanks';
import Dashboard from './pages/Main';
import Vote from './pages/Vote';
import NewProd from './pages/NewProd';
import ProdAbout from './pages/ProductAbout';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Signup}/>
                <Route path="/register/thankyou" component={SUThanks}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/voting" component={Vote}/>
                <Route path="/prod/new" component={NewProd}/>
                <Route path="/prod/about" component={ProdAbout}/>
            </Switch>
        </BrowserRouter>
    );
}