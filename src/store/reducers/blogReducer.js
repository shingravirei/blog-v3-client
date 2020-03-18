import { INIT_BLOGS, ADD_BLOG } from '../actions/actionType';

const blogReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_BLOGS:
            if (action.payload === undefined) {
                return state;
            }
            return action.payload;

        case ADD_BLOG:
            return state;

        default:
            return state;
    }
};

export default blogReducer;
