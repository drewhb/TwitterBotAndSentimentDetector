import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image,TouchableOpacity, Button, View, Alert } from 'react-native';
//import { Button } from 'react-native-web';
import  Top from './Components/toppart'
import EnterAccount from './Components/EnterAccount';
//import { Client } from "twitter-api-sdk";


export default function App() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAOL%2BgwEAAAAAbaU08vZOfZc7dRwn5dO0uOBpEaw%3DGPV4sU2JhdbgD1XMt2EMqGhhgJMyVi15gXE7ZXv5FppMcfEmoD");
    myHeaders.append("Cookie", "guest_id=v1%3A166386773258900618");
    var response; 
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    var user_id = ''; 
    fetch("https://api.twitter.com/2/users/by/username/ElonMusk", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAOL%2BgwEAAAAAbaU08vZOfZc7dRwn5dO0uOBpEaw%3DGPV4sU2JhdbgD1XMt2EMqGhhgJMyVi15gXE7ZXv5FppMcfEmoD");
      myHeaders.append("Cookie", "guest_id=v1%3A166386773258900618");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      //user_id = response.data.id; 
      var getMentionsURL = ""; 
      fetch("https://api.twitter.com/2/users/44196397/mentions?max_results=50", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  
  
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


