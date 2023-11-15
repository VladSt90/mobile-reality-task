import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.0.207:3005',
  timeout: 1000,
  headers: {'x-api-key': 'thisisapikey'},
});

export const fetchPosts = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const deletePost = async postId => {
  try {
    const response = await apiClient.delete(`/posts/${postId}`);
    return response.data; // or just return true to indicate success
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error);
  }
};

export const createPost = async title => {
  try {
    const response = await apiClient.post('/posts', title);
    return response.data; // You can return the data of the newly created post
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
