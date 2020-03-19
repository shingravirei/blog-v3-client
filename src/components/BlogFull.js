import React from 'react';

const BlogFull = ({ blog }) => {
    if (blog) {
        return (
            <div className={'container'}>
                <div className={'blog'}>
                    <h1 className={'title'}>{blog.title}</h1>
                    <div className={'content'}>{blog.content}</div>
                </div>
            </div>
        );
    }

    return null;
};

export default BlogFull;
