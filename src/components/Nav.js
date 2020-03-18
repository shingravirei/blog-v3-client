import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/actionCreator';

const Nav = ({ logged, logout, history }) => {
    const handleLogout = () => {
        logout();

        localStorage.clear();

        history.push('/');
    };

    return (
        <div className={'navbar'}>
            <p>
                <Link to="/">Home</Link>
            </p>
            {logged && (
                <p>
                    <Link to="/addblog">Add Blog</Link>
                </p>
            )}

            <p>
                <Link to="/about">About</Link>
            </p>

            {logged ? (
                <button onClick={handleLogout}>logout</button>
            ) : (
                <p>
                    <Link to="/login">Login</Link>
                </p>
            )}
        </div>
    );
};

const mapState = state => ({
    logged: state.user.logged
});

const mapDispatch = {
    logout
};

export default connect(mapState, mapDispatch)(withRouter(Nav));
