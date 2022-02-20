import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { webWeights, iOSColors } from 'react-native-typography'
import Svg, {
    Path,
    G,
  } from 'react-native-svg';

function getTime(time) {
    if (time == 0){
        return 60;
    } 
}

const Recipe = (props) => {
    console.log(props.info.name);
    console.log("here");
    return (
      <View>
        <View  style={props.fav? styles.itemFav : styles.item}>
            <View style={styles.itemLeft}>
            <Text style={styles.square}> {getTime(props.info.waittime) ? (getTime(props.info.waittime) + " min") : <Text>no info</Text>}</Text>
                <View style={styles.timeContainer}>
                    
                      <Svg style={styles.iconContainer} viewbox='0 0 32 32'>
                        <G style={styles.icon}>
                          <Path
                            scale='0.5'
                            fill='#000'
                            d='M16,0 C7.177658,0 0,7.177652 0,16 C0,24.82232 7.177658,32 16,32 C24.822342,32 32,24.82232 32,16 C32,7.177652 24.822342,0 16,0 Z M16,2.4 C23.525286,2.4 29.6,8.474708 29.6,16 C29.6,23.52528 23.525286,29.6 16,29.6 C8.4747144,29.6 2.4,23.52528 2.4,16 C2.4,8.474708 8.4747144,2.4 16,2.4 Z M15.9875,3.575 C15.6670444,3.57830074 15.36122,3.70963219 15.138161,3.93973514 C14.915102,4.16983809 14.7933392,4.47959664 14.8,4.8 L14.8,14.8 L7.2,14.8 C6.7672369,14.7938797 6.36470236,15.0212504 6.14653473,15.3950474 C5.92836711,15.7688445 5.92836711,16.2311555 6.14653473,16.6049526 C6.36470236,16.9787496 6.7672369,17.2061203 7.2,17.2 L16,17.2 C16.6627143,17.1999337 17.1999337,16.6627143 17.2,16 L17.2,4.8 C17.2067517,4.47526094 17.0815869,4.16165301 16.8530929,3.93080341 C16.624599,3.69995381 16.3122912,3.57157921 15.9875,3.575 Z'
                          />
                        </G>
                      </Svg>
                      {/* <Text style={styles.duration}>{(props.info.cooktime / 60)} Minutes</Text> */}
                    </View>
                
                <Text style={styles.itemText}> {props.info.name} </Text>
                <Text style={styles.nutri}> 
                  <Text style={styles.nutriLabel}> Servings: </Text> 
                  {props.info.servings} {"\n"}

                  {props.info.waittime != 0 &&  
                  <Text> <Text style={styles.nutriLabel}>Wait Time: </Text> 
                  {props.info.waittime/60} mins {"\n"}</Text>}
                  
                  {props.info.preptime != 0 &&  
                  <Text> <Text style={styles.nutriLabel}>Prep Time: </Text> 
                  {props.info.preptime/60} mins {"\n"}</Text>}

                  {props.info.carbs != 0 &&  
                  <Text> <Text style={styles.nutriLabel}>Carbs: </Text> 
                  {props.info.carbs}{"\n"}</Text>}

                  {props.info.fiber != 0 &&  
                  <Text> <Text style={styles.nutriLabel}>Fiber: </Text> 
                  {props.info.fiber}{"\n"}</Text>}

                  {props.info.protein != 0 &&  
                  <Text> <Text style={styles.nutriLabel}>Protein: </Text> 
                  {props.info.protein}{"\n"}</Text>}

                  {props.info.calories != 0 &&  
                  <Text> <Text style={styles.nutriLabel}>Calories: </Text> 
                  {props.info.calories}{"\n"}</Text>}
                </Text>
            </View>
            {/* <View style={styles.circular}></View> */}
        </View>
      </View>

    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor: iOSColors.white,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemFav:{
      backgroundColor: iOSColors.yellow,
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
  },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 37,
        height: 37,
        backgroundColor: iOSColors.blue,
        opacity: 0.8,
        borderRadius: 8,
        marginTop:8,
        marginRight: 15,
        textAlign: 'center',
        fontSize: 14,
        color: iOSColors.white,
        ...webWeights.semibold
    },
    itemText:{
        maxWidth: '80%',
    },
    nutri:{
      maxWidth: '90%',
      paddingLeft: 90,
    },
    nutriLabel:{
      maxWidth: '90%',
      fontWeight: 'bold',
      paddingLeft: 90,
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: iOSColors.gray,
        borderWidth: 2,
        borderRadius: 5,
    },
    iconContainer: {
        width: 16,
        height: 16,
        marginRight: 12,
      },
      icon: {
        width: 16,
        height: 16,
      },
      timeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
      },
})

export default Recipe;