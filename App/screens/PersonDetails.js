import React, { useState, useEffect } from 'react';
import { ScrollView, Text, ActivityIndicator, View } from 'react-native';

const valueMap = {
  name: 'Name',
  height: 'Height',
  mass: 'Mass',
  hair_color: 'Hair Color',
  skin_color: 'Skin Color',
  eye_color: 'Eye Color',
  birth_year: 'Birth Year',
  gender: 'Gender',
};

export const PersonDetails = ({ route }) => {
  const params = route.params || {};
  const { details = {}, id } = params;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(details).length > 0) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      {Object.keys(valueMap).map((key) => {
        if (!details[key]) {
          return null;
        }

        return (
          <Text style={{ fontSize: 18, marginTop: 10 }} key={key}>
            <Text style={{ fontWeight: 'bold' }}>{`${valueMap[key]}: `}</Text>
            {details[key]}
          </Text>
        );
      })}
    </ScrollView>
  );
};
