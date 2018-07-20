import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import Home from '../containers/Home/Index'
import Sample from '../containers/Sample/Index'


const Routes = () => (
    <div className="app">

        <Router>
            <div>
                <Link to={'/'}>首页</Link>
                <span>    </span>
                <Link to={'/sample'}>测试页</Link>
                <Switch>

                    <Route path="/" exact component={Home}/>
                    <Route path="/sample" exact component={Sample}/>
                    {/*<Route path='/404' component={NotFound} />*/}
                    {/*<Redirect from='*' to='/404' />*/}
                </Switch>
            </div>
        </Router>
    </div>
);

export default Routes;