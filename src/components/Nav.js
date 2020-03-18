import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    return (
        <div className={'navbar'}>
            <p>
                <Link to="/">Home</Link>
            </p>
            {!userIsLoggedIn && (
                <p>
                    <Link to="/addblog">Add Blog</Link>
                </p>
            )}
            <p>
                <Link to="/login">Login</Link>
            </p>
            <p>
                <Link to="/about">About</Link>
            </p>
        </div>
    );
};

export default Nav;
