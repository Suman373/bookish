import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <View style={styles.homeWrapper}>
      <View style={styles.searchWrapper}>
        <TextInput
        style={styles.searchInput}
        placeholder='Search book'/>
        <Icon
        style={styles.searchIcon} 
        size={25} 
        name='search1'/>
      </View>
      <View style={styles.categoryOptions}>
          {/* category custom buttons */}
      </View>
      <View style={styles.trendingBooksWrapper}>
        <Text>
          Trending books
        </Text>
        <ScrollView>
          {/* Contains the books from trending api , trending books-> separate component*/}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    homeWrapper:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingHorizontal:5,
    },
    searchWrapper:{
      height:50,
      flexDirection:'row',
      width:'90%',
      marginVertical:15,
      // backgroundColor:'magenta',
    },
    searchInput:{
      width:'90%',
      backgroundColor:'white',
      borderWidth:2,
      borderColor:'grey',
      borderRadius:20,
      fontSize:16,
      padding:9,
    },
    searchIcon:{
      marginVertical:12,
      marginLeft:4,
      padding:2,
      color:'grey'
    },
    categoryOptions:{
      height:35,
      width:'auto',
      paddingVertical:8,
      paddingHorizontal:10,
      backgroundColor:'#efefef',
      justifyContent:'center',
      gap:8
    }
})