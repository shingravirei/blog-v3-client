import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/actionCreator';
import { withRouter } from 'react-router-dom';

const LoginForm = ({ login, history }) => {
    const handleForm = async e => {
        e.preventDefault();

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        };

        e.target.username.value = '';
        e.target.password.value = '';

        login(user);

        history.push('/');
    };

    return (
        <div className={'container'}>
            <form onSubmit={handleForm}>
                <h1>Login</h1>
                <div>
                    <input
                        name={'username'}
                        type={'text'}
                        placeholder={'Username'}
                    />
                </div>
                <div>
                    <input
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

const mapDispatch = { login };

export default connect(null, mapDispatch)(withRouter(LoginForm));
