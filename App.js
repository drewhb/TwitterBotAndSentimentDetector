import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image,TouchableOpacity, Button, View } from 'react-native';
//import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Twiter Bot Detecter</Text>
      <Image source={require("./assets/background2.png")} style={styles.BackgroundImage}/> 
           <Button 
           title="Enter your account name" 
           color ='red'
           onPress={() => console.log("Button tapped")}
            />
      <StatusBar style="auto" />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Background Image Size and Position
  BackgroundImage:{
    width:80,
    height:80,
  }
});


