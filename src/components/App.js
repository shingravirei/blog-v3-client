import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initBlogs } from '../store/actions/actionCreator';

import Home from './routes/Home';
import AddBlog from './routes/AddBlog';
import About from './routes/About';
import Login from './routes/Login';
import Nav from './Nav';

import '../styles/style.css';

const App = ({ initBlogs }) => {
    const [firstTime, setFirstTime] = useState(true);

    useEffect(() => {
        if (firstTime) {
            const tempToken = 'temp_token';
            initBlogs(tempToken);
            setFirstTime(!firstTime);
        }
    }, [initBlogs, firstTime]);

    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/addblog">
                        <AddBlog />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

const mapDispatchToProps = { initBlogs };

export default connect(null, mapDispatchToProps)(App);
