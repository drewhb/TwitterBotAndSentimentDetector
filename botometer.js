import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useState, useEffect } from 'react'

export function GetUser(userName) {
  console.log("Running GET UserId for  " + userName)
  const [user, setUser] = useState([]); 

    //GET user ID
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAOL%2BgwEAAAAAbaU08vZOfZc7dRwn5dO0uOBpEaw%3DGPV4sU2JhdbgD1XMt2EMqGhhgJMyVi15gXE7ZXv5FppMcfEmoD");
    myHeaders.append("Cookie", "guest_id=v1%3A166386773258900618");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    var getUserURL = "https://api.twitter.com/2/users/by/username/" + userName; 

    useEffect(() => {
      fetch(getUserURL, requestOptions)
        .then(response => response.json())
        .then((resJson) => {
          const user = resJson
          setUser(user)
        })
        .catch(error => console.log('error', error));
    }, [])
    console.log(user); 
    //var userId = JSON.parse(user);
    //userId = userId.user.data.id
    return ({
        user
    })
}

  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAOL%2BgwEAAAAAbaU08vZOfZc7dRwn5dO0uOBpEaw%3DGPV4sU2JhdbgD1XMt2EMqGhhgJMyVi15gXE7ZXv5FppMcfEmoD");
  // myHeaders.append("Cookie", "guest_id=v1%3A166386773258900618");
  
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };



  // //user_id = response.data.id; 
  // var getMentionsURL = ""; 
  // fetch("https://api.twitter.com/2/users/44196397/mentions?max_results=50", requestOptions)
  //   .then(response => response.text())
  //   //.then(result => console.log(result))
  //   .catch(error => console.log('error', error));

