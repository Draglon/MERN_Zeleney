import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

var Header = require('./../header.jsx');
var Home = require('./../pages/home.jsx');
var GreenWall = require('./../pages/green_wall.jsx');
var PhytoPicture = require('./../pages/phyto_picture.jsx');
var NotFound = require('./../pages/notfound.jsx');
var Footer = require('./../footer.jsx');

var AdminPanel = require('./../admin/Auth.jsx');

const history = createBrowserHistory();

const MainComponent = React.createClass({
    render() {
        return (
            <Router history={history}>
                {window.location.pathname === "/admin" ? 
                    <div>
                        <Switch>
                            <Route path="/admin" component={AdminPanel} />
                        </Switch>
                    </div>
                :
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/green_wall" component={GreenWall} />
                            <Route path="/phyto_picture" component={PhytoPicture} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />
                    </div>
                }
            </Router>
        );
    },
});

export default MainComponent;