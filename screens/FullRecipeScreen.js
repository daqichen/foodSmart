import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Recipe from '../components/Recipe';
import { webWeights, iOSColors } from 'react-native-typography'

const FullRecipeScreen = ({route,navigation}) => {
    //const message = navigation.getParam('paramKey')
    const rec = route.params.paramKey;

    console.log(rec);
    return(
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}> {rec.name} </Text>
        <Text style={styles.itemDescription}> Prep Time: {rec.preptime/60} </Text>
        <Text style={styles.itemDescription}> Wait Time: {rec.waittime/60} </Text>
        <Text style={styles.itemDescription}> Servings: {rec.servings} </Text>
      
        <Text style={styles.sectionTitle}> Ingredients List: </Text>
        {
            rec.ingredients.map((item,index)=>{
              return (
                  <Text style={styles.items}> {item}</Text>
            )})
  
          }
        <Text style={styles.sectionTitle} > Steps: </Text>
        <Text style={styles.steps}>
            {rec.instructions}
        </Text>
        </View>
    </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 20,
      paddingHorizontal: 10,

    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
  
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingTop: 20,
      paddingBottom: 10,
      ...webWeights.heavy,
    },
    title:{
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop: 30,
      paddingBottom: 30,
      ...webWeights.black,
    },
    itemDescription: {
      fontSize: 15,
      letterSpacing: 1.5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      ...webWeights.semibold,
    },
    items: {
      fontSize: 15,
      letterSpacing: 1.5,
      paddingVertical: 2,
      ...webWeights.light,
    },
    steps: {
      fontSize: 18,
      letterSpacing: 1.5,
      paddingVertical: 7,
      paddingHorizontal: 10,
      ...webWeights.light,
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

export default FullRecipeScreen;