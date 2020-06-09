import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Alert, ActivityIndicator } from 'react-native';

export const PostDetails = ({ route }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  const params = route.params || {};
  const { title, body, id } = params;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
      })
      .catch((error) => {
        Alert.alert('an error occurred! See console for more info.');
        console.log(error);
      })
      .finally(() => {
        setLoadingComments(false);
      });
  }, []);

  return (
    <ScrollView
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
      <Text style={{ marginTop: 10, fontSize: 15 }}>{body}</Text>

      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Comments:</Text>
      {loadingComments && <ActivityIndicator size="large" />}
      {comments.map((comment) => (
        <Text key={comment.id} style={{ marginTop: 10 }}>
          {comment.body}
        </Text>
      ))}
    </ScrollView>
  );
};
