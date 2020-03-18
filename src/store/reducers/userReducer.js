import { LOGIN, LOGOUT, INIT_USER } from '../actions/actionType';

const user = {
    username: undefined,
    token: undefined,
    logged: false
};

const userReducer = (state = user, action) => {
    switch (action.type) {
        case LOGIN:
            if (!action.payload) {
                return state;
            }

            localStorage.setItem('user', JSON.stringify(action.payload));

            return { ...action.payload, logged: true };

        case LOGOUT:
            return user;

        case INIT_USER:
            return { ...action.payload, logged: true };

        default:
            return state;
    }
};

export default userReducer;
