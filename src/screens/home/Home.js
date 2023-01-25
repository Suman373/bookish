import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.homeWrapper}>
      <Text>HOME SCREEN</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    homeWrapper:{
        flex:1,
        width:'100%',
        backgroundColor:'skyblue',
        paddingHorizontal:5,
    }
})