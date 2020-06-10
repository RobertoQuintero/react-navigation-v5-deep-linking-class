import React from 'react';
import { ScrollView, Text } from 'react-native';

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

export const PeopleDetails = ({ route }) => {
  const params = route.params || {};
  const { details } = params;

  return (
    <ScrollView
      style={{ backgroundColor: '#fff' }}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      {Object.keys(valueMap).map((key) => {
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
