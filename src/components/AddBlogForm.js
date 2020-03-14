import React from 'react';

const AddBlogForm = () => {
    return (
        <div className={'container'}>
            <form>
                <h1>Add Blog</h1>
                <div>
                    <input type={'text'} placeholder={'Title'} />
                </div>
                <div>
                    <textarea placeholder={'Content...'} rows={15}></textarea>
                </div>
                <button>Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlogForm;
