import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const PostsList = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      })
      .catch((error) => {
        Alert.alert('an error occurred! See console for more info.');
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <FlatList
      style={{ backgroundColor: '#fff' }}
      data={posts}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push('PostDetails', {
              title: item.title,
              body: item.body,
              id: item.id,
            })
          }
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.10)',
            height: 1,
            marginLeft: 10,
          }}
        />
      )}
      keyExtractor={(item) => `${item.id}`}
      ListFooterComponent={() => {
        if (loading) {
          return (
            <View>
              <ActivityIndicator size="large" />
            </View>
          );
        }

        return null;
      }}
    />
  );
};
