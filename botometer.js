import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {

    let [score, setScore] = React.useState('')
    let [handle, setHandle] = React.useState('')

    const fetchApiCall = () => {
      fetch("https://botometer-pro.p.rapidapi.com/4/check_account", {
        "method": "POST",
        "headers": {
          "x-rapidapi-host": "botometer-pro.p.rapidapi.com",
          "x-rapidapi-key": "ae92546582mshacaa08852bc7c87p135209jsn655208c2edca"
        },
        "User" : {
          "screen_name": "ElonMusk"}
      })
        .then(response => response.json())
        .then(response => {
          console.log(response.content);
          console.log(response.originator.name)
        })
        .catch(err => {
          console.log(err);
        });
    }
    return (
      <View style={styles.container}>
        <Text>Twitter Bot Detector!</Text>
        <TouchableHighlight onPress={fetchApiCall}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Use Fetch API</Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 35,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
