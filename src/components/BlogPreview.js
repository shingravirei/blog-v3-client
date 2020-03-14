import React from 'react';
import LazyLoad from 'react-lazyload';

const BlogPreview = () => {
    return (
        <LazyLoad offset={100}>
            <div className={'blog-preview'}>
                <div className={'title'}>
                    <h1>Hello</h1>
                    <p>/by shingravirei</p>
                </div>
                <div className={'content'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    vitae pretium ipsum. Nam eu consectetur quam. Praesent
                    aliquet dolor eget libero tempor, sit amet mattis ligula
                    vestibulum. Suspendisse tempor, elit ac blandit dapibus,
                    massa dui vehicula ante, a finibus dolor nulla eu neque.
                    Curabitur tellus risus, blandit nec sagittis eu,
                    pellentesque blandit enim. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Ut sapien neque, suscipit id
                    malesuada sed, bibendum non purus. Suspendisse potenti.
                    Integer ac neque erat. Integer eleifend erat at mauris
                    scelerisque congue. Maecenas volutpat vehicula nisl ut
                    pellentesque. Fusce ac viverra leo. Suspendisse potenti.
                    Phasellus eget elementum nisi.
                </div>
                <div className={'preview-bottom'}>
                    <p className={'edited'}>
                        <em>8 hours ago</em>
                    </p>
                    <button>Read More</button>
                </div>
            </div>
        </LazyLoad>
    );
};

export default BlogPreview;
