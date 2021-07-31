import { React } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TodosList } from './features/todos/todosList';
import { AuthComponent } from './features/authentication/authentication-component' 

export const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/tasks' component={TodosList}/>
                <Route path='/authenticate' component={AuthComponent}/>
                <Route path='/'>
                    <Redirect to='/authenticate' />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}