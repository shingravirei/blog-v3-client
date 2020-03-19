import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { initBlogs, initUser } from '../store/actions/actionCreator';

import Home from './routes/Home';
import Blog from './routes/Blog';
import AddBlog from './routes/AddBlog';
import About from './routes/About';
import Login from './routes/Login';
import Nav from './Nav';

import '../styles/style.css';

const App = ({ initBlogs, initUser, logged, blogs }) => {
    useEffect(() => {
        initBlogs();

        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            initUser(user);
        }
    }, [initUser, initBlogs]);

    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route
                        path="/blog/:id"
                        render={({ match }) => <Blog id={match.params.id} />}
                    />
                    <Route path="/addblog">
                        {logged ? <AddBlog /> : <Redirect to="/login" />}
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

const mapState = state => ({ logged: state.user.logged });

const mapDispatch = { initBlogs, initUser };

export default connect(mapState, mapDispatch)(App);
