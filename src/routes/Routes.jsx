import React, { useContext } from 'react'
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Context } from '../hooks/Context'

export const Routes = () => {
    const {context} = useContext(Context)
    const {isLogged} = context
    
    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login /> 
                </Route>
                { isLogged ? <Redirect to="/home" ></Redirect> : <Redirect to="/login" ></Redirect> }
            </Switch>
        </Router>
    )
}
