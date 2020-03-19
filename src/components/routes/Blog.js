import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initBlogs } from '../../store/actions/actionCreator';

import BlogFull from '../BlogFull';

const Blog = ({ id, initBlogs, blogs }) => {
    useEffect(() => {
        initBlogs();
    }, [initBlogs]);

    return <BlogFull blog={blogs.find(blog => blog.id === Number(id))} />;
};

const mapDispatch = { initBlogs };

const mapState = state => {
    return {
        blogs: state.blogs
    };
};

export default connect(mapState, mapDispatch)(Blog);
