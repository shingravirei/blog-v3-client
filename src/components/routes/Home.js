import React from 'react';
import { connect } from 'react-redux';

import BlogPreview from '../BlogPreview';

const Home = ({ blogs }) => {
    return (
        <div className={'container'}>
            <h1>Shingravirei's Blog</h1>
            {blogs.map(blog => (
                <BlogPreview key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        blogs: state.blogs.slice().reverse()
    };
};

export default connect(mapStateToProps)(Home);
