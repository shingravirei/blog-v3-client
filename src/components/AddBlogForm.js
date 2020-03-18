import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../store/actions/actionCreator';
import { withRouter } from 'react-router-dom';

const AddBlogForm = ({ addBlog, history, token }) => {
    const handleForm = async e => {
        e.preventDefault();

        const newBlog = {
            title: e.target.title.value,
            content: e.target.content.value
        };

        addBlog(newBlog, token);

        e.target.title.value = '';
        e.target.content.value = '';

        history.push('/');
    };

    return (
        <div className={'container'}>
            <form onSubmit={handleForm}>
                <h1>Add Blog</h1>
                <div>
                    <input name={'title'} type={'text'} placeholder={'Title'} />
                </div>
                <div>
                    <textarea
                        name={'content'}
                        placeholder={'Content...'}
                        rows={15}
                    ></textarea>
                </div>
                <button>Add Blog</button>
            </form>
        </div>
    );
};

const mapState = state => ({ token: state.user.token });

const mapDispatch = { addBlog };

export default connect(mapState, mapDispatch)(withRouter(AddBlogForm));
