import React from 'react';
import { Text, View, Button } from 'react-native';

const ProfileScreen = ({}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ProfileScreen</Text>
        <Button 
            title="Click Here"
            onPress={() => alert('Button Clicked!!')} />
    </View>
);

export default ProfileScreen;
