import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { webWeights,iOSColors } from 'react-native-typography';

const Task = (props) => {
    console.log(props);
    const today = new Date();

    return (
        <View  style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {props.text}   </Text>
                {props.dateobj.setHours(0,0,0,0) <= today.setHours(0,0,0,0) ? 
                <Text style={Math.abs(props.dateobj-today) / 86400000 < 1 ? styles.todayDate: styles.expiredDate}> {props.date} </Text>
                :
                <Text style={styles.itemDate}> {props.date} </Text>}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor: '#FFF',
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
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
    },
    itemDate:{
        flex: 1,
        textAlign: 'right',
        //paddingRight: 5,
        color: iOSColors.green,
    },
    expiredDate:{
        flex: 1,
        textAlign: 'right',
        color: iOSColors.red,
    },
    todayDate:{
        flex: 1,
        textAlign: 'right',
        color: iOSColors.yellow,
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    

})

export default Task;