import React from 'react';

const BlogPreview = ({ blog }) => {
    return (
        <div className={'blog-preview'}>
            <div className={'title'}>
                <h1>{blog.title}</h1>
                <p>/by shingravirei</p>
            </div>
            <div className={'content'}>{blog.content}</div>
            <div className={'preview-bottom'}>
                <p className={'edited'}>
                    <em>8 hours ago</em>
                </p>
                <button>Read More</button>
            </div>
        </div>
    );
};

export default BlogPreview;
