//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image,TouchableOpacity, Button, View, TextInput} from 'react-native';

//Allow user to enter account names
export default function EnterAccount({confirmHandle}) {
    var[defaultText, EnterText] = useState('');

    const redirect = (val) =>(
        EnterText(val)
    )
    return(
     <View style={styles.EnterAccount}>
         <TextInput 
         style = {styles.enter}
         placeholder ='Enter the Account Name...'
         onChangeText={redirect}>
         </TextInput>
         <Button 
           style = {styles.ConfirmButton}
           title="Confirm" 
           color ='red'
           onPress={() => confirmHandle(defaultText)}
            />
      </View>
    )
 } 

 const styles = StyleSheet.create({
    enter:{
        textAlign: 'center',
        fontSize:'16',
        marginBottom: 10,
        marginTop:100,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
        //fontweight:'bold'
    }
})