import React from 'react';
import { Router, browserHistory, Route } from 'react-router';

import Root from './containers/Root/Root';
import RootContainer from './containers/wrapper';
import NewsList from './containers/NewsList/NewsList';


export default (
    <Router history = { browserHistory }>
        <Route component = { RootContainer }>
            <Route path = "/" component={ Root }>
                <Route path = "news" component = { NewsList }/>
            </Route>
        </Route>
    </Router>
);