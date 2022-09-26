import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useState, useEffect } from 'react'


export function GetUser(userName) {
  console.log("Running GET UserId for  " + userName)
  var [user, setUser] = useState(""); 

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
        .then(response => response.text())
        .then((response) => {
          var user = response
          setUser(user)
        })
        .catch(error => console.log('error', error));
    }, [])
    //console.log(user); 
    if(user != []){
      var userId = JSON.parse(user);
    }
    console.log(userId);
    //userId = userId.user.data.id
    return ({
        userId
    })
}

export function GetMentions(userId) {
  var [mentions, getMentions] = useState(""); 
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAOL%2BgwEAAAAAbaU08vZOfZc7dRwn5dO0uOBpEaw%3DGPV4sU2JhdbgD1XMt2EMqGhhgJMyVi15gXE7ZXv5FppMcfEmoD");
  myHeaders.append("Cookie", "guest_id=v1%3A166386773258900618");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };



  //user_id = response.data.id; 
  var getMentionsURL = "https://api.twitter.com/2/users/" + userId + "/mentions?max_results=50"; 
  fetch(getMentionsURL, requestOptions)
    .then(response => response.text())
    .then((resJson) => {
       var mentions = resJson
      getMentions(mentions)
    })
    .catch(error => console.log('error', error));

    return (
      {
        mentions 
      }
    )
  }


  export function GetTimeline(userId) {

    const [tweets, getTweets] = useState(""); 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAOL%2BgwEAAAAAbaU08vZOfZc7dRwn5dO0uOBpEaw%3DGPV4sU2JhdbgD1XMt2EMqGhhgJMyVi15gXE7ZXv5FppMcfEmoD");
    myHeaders.append("Cookie", "guest_id=v1%3A166386773258900618");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
      
      
  
    //user_id = response.data.id; 
    var getMentionsURL = "https://api.twitter.com/2/users/" + userId + "/tweets?max_results=50"; 
    fetch(getMentionsURL, requestOptions)
      .then(response => response.text())
      .then((resJson) => {
        var tweets = resJson
        getTweets(tweets)
      })
      .catch(error => console.log('error', error));
  
      return (
        {
          mentions 
        }
      )
    }