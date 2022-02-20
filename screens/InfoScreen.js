import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Task from '../components/Task'
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { webWeights, iOSColors } from 'react-native-typography'

const InfoScreen = ({ navigation }) => {
    return(
        <View>
    <Text style={styles.itemDescription}>
    
      <Text>
      Press once to discover and get inspired by some delicious recipes! {"\n\n"}
      Press and Hold to delete an ingredient from your pantry. {"\n\n"}
      If one of the dates next to the item is red, please discard the item! {"\n\n"}
      Now, begin to add your pantry items below and join us in the effort of eliminating food waste! {"\n\n"}
    </Text>
  </Text>
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
    itemDescription: {
      fontSize: 15,
      letterSpacing: 1.5,
      paddingVertical: 10,
      paddingHorizontal: 10,
      ...webWeights.semibold,
    },
    itemDescriptionStrong: {
      fontSize: 18,
      letterSpacing: 1.5,
      paddingVertical: 8,
      paddingHorizontal: 10,
      textDecorationLine: 'underline',
      ...webWeights.heavy,
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

  export default InfoScreen;