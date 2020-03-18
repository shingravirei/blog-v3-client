import axios from 'axios';

const baseUrl = 'http://localhost:7777/api';

const getAllBlogs = async () => {
    try {
        const result = await axios.get(`${baseUrl}/blogs/all`);

        return result.data;
    } catch (err) {}
};

const newBlog = async (blog, token) => {
    try {
        const config = {
            headers: { Authorization: `bearer ${token}` }
        };

        const result = await axios.post(`${baseUrl}/blogs`, blog, config);

        return result.data;
    } catch (err) {}
};

const loginUser = async user => {
    try {
        const result = await axios.post(`${baseUrl}/login`, user);

        return result.data;
    } catch (err) {}
};

export { getAllBlogs, newBlog, loginUser };
