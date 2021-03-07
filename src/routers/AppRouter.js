import React from 'react';
import {Router, Switch , Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import HomePage from '../pages/HomePage';
import OverviewPage from '../pages/OverviewPage';
import Sidebar from '../components/Sidebar';
import InnerContentPage from '../pages/InnerContentPage';
import GlobalStyles from '../components/GlobalStyles';
import ReportsPage from '../pages/ReportsPage';
import SupportPage from '../pages/SupportPage';


export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history = {history}>
            <GlobalStyles />
            <Sidebar />
            <Switch>
                <Route path = '/' component = {HomePage} exact = {true} />
                <Route path = '/overview' component = {OverviewPage} exact = {true} />
                <Route path = '/overview/:pageId' component = {InnerContentPage} />
                <Route path = '/reports' component = {ReportsPage} exact = {true} />
                <Route path = '/reports/:pageId' component = {InnerContentPage} />
                <Route path = '/support' component = {SupportPage}/>  
            </Switch>
        </Router>
    );
};

export default AppRouter;