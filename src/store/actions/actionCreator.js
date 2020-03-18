import { getAllBlogs } from '../../services/blog';
import { INIT_BLOGS } from '../actions/actionType';

const initBlogs = token => {
    return async dispatch => {
        const blogs = await getAllBlogs(token);

        dispatch({
            type: INIT_BLOGS,
            payload: blogs
        });
    };
};

export { initBlogs };
