import React from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';


import Login from './pages/Login';
import Signup from './pages/SignUp';
import SUThanks from './pages/signupThanks';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Signup}/>
                <Route path="/register/thankyou" component={SUThanks}/>
            </Switch>
        </BrowserRouter>
    );
}