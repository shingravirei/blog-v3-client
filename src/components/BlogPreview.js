import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = ({ blog }) => {
    return (
        <div className={'blog-preview'}>
            <div className={'title'}>
                <h1>{blog.title}</h1>
                <p>/by shingravirei</p>
            </div>
            <div className={'preview'}>{blog.content}</div>
            <div className={'preview-bottom'}>
                <p className={'edited'}>
                    <em>{blog.updatedAt}</em>
                </p>
                <Link to={`blog/${blog.id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    );
};

export default BlogPreview;
