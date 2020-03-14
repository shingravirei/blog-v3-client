import axios from 'axios';

const baseUrl = 'http://localhost:7777/api';

const getAllBlogs = async token => {
    try {
        const config = {
            headers: { Authorization: `bearer ${token}` }
        };

        const blogs = await axios.get(`${baseUrl}/blogs`, config);

        return blogs.data;
    } catch (err) {}
};

export { getAllBlogs };
