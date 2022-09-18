import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image,TouchableOpacity, Button, View, Alert } from 'react-native';
//import { Button } from 'react-native-web';
import  Top from './Components/toppart'
import EnterAccount from './Components/EnterAccount';
 
export default function App() {

  const confirmHandle = (InputText) =>{
  //connect to twitter and pull the data to detect bot
  //Implement here

  //Alert when input is empty
  if(InputText.length < 1){
    Alert.alert('Please Note',
      'Account Name can not be empty!',
    [{text: 'OK', onPress: () => console.log('alert closed')}])
  }
  //Alert when account does not exist
  //implement here

  }
  return (      
    <View style={styles.container}>
      <Top style = {styles.Header}/>
      
      <Image source={require("./assets/background2.png")} style={styles.BackgroundImage}/> 
      <EnterAccount confirmHandle ={confirmHandle}/>
           
      <StatusBar style="auto" />
    </View>
    
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
  },
  //Background Image Size and Position
  BackgroundImage:{
    marginTop: 20,
    width:80,
    height:80,
  },
  Header:{
    top:0
  },
  ConfirmButton:{
    justifyContent: 'center',
    marginTop: 100,
    fontWeight:'bold'
  }
});


