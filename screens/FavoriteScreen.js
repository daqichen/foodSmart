import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Recipe from '../components/Recipe';

import db from '../assets/recipes.js'

const FavoriteScreen = ({route,navigation}) => {
 
    var recipeItems = route.params.paramKey;
    const [recipes, setRecipes] = useState([]);



return(
    <View style={styles.container}>
  
    <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Favorites</Text>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.items}>
    {
            recipeItems.map((item,index)=>{
              return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('FullRecipe',{
                paramKey: item,
              })}
              /*onPress={() =>
                navigation.navigate('SecondPage', {
                  paramKey: userName,
                })
                
              }*/ > 
                    <Recipe info={item}/>
              </TouchableOpacity>
            )})
  
          }
      
    </ScrollView>
    </View>
    </View>

)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
  
    },
    tasksWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
  
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input:{
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper:{
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText:{}
  });

export default FavoriteScreen;