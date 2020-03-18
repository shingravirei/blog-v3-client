import { getAllBlogs, newBlog, loginUser } from '../../services/blog';
import {
    INIT_BLOGS,
    ADD_BLOG,
    LOGIN,
    LOGOUT,
    INIT_USER
} from '../actions/actionType';

const initBlogs = () => {
    return async dispatch => {
        const blogs = await getAllBlogs();

        dispatch({
            type: INIT_BLOGS,
            payload: blogs
        });
    };
};

const addBlog = (blog, token) => {
    return async dispatch => {
        const returnedBlog = await newBlog(blog, token);

        dispatch({
            type: ADD_BLOG,
            payload: returnedBlog
        });
    };
};

const login = user => {
    return async dispatch => {
        const result = await loginUser(user);

        dispatch({
            type: LOGIN,
            payload: result
        });
    };
};

const logout = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT
        });
    };
};

const initUser = user => {
    return dispatch => {
        dispatch({
            type: INIT_USER,
            payload: user
        });
    };
};

export { initBlogs, addBlog, login, logout, initUser };
