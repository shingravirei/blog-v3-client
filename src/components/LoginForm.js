import React from 'react';

const LoginForm = () => {
    return (
        <div className={'container'}>
            <form>
                <h1>Login</h1>
                <div>
                    <input type={'text'} placeholder={'Username'} />
                </div>
                <div>
                    <input type={'password'} placeholder={'Password'} />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
