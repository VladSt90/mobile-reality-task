import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {createPost, deletePost, fetchPosts} from '../api/api'; // Assuming deletePost is a function in your API

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const posts = await fetchPosts();
    setPosts(posts);
  };

  const handleDelete = async postId => {
    await deletePost(postId);
    loadPosts(); // Reload posts after deletion
  };

  const openPostModal = post => {
    setSelectedPost(post);
    setIsModalVisible(true);
  };

  const openCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleSave = async () => {
    await createPost({title: newPostTitle});
    setNewPostTitle('');
    setIsCreateModalVisible(false);
    loadPosts(); // Reload posts after adding new one
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <Text style={styles.postText}>{item.title}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
              <Button title="Show" onPress={() => openPostModal(item)} />
            </View>
          </View>
        )}
      />
      <Button title="Create Post" onPress={openCreateModal} />

      {/* Modal for Post Details */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Post Details</Text>
          {selectedPost && (
            <View>
              <Text style={styles.modalText}>Title: {selectedPost.title}</Text>
              <Text style={styles.modalText}>
                Description: {selectedPost.description}
              </Text>
              {/* Add more details as needed */}
            </View>
          )}
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>

      {/* Modal for Creating a Post */}
      <Modal
        visible={isCreateModalVisible}
        onRequestClose={() => setIsCreateModalVisible(false)}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Create a New Post</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={newPostTitle}
            onChangeText={setNewPostTitle}
          />
          <Button title="Save" onPress={handleSave} />
          <Button
            title="Close"
            onPress={() => setIsCreateModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    color: 'black',
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  postText: {
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black', // Ensuring modal text is black
  },
});

export default PostsScreen;
