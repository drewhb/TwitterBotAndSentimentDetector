import { StyleSheet, Text, Image,TouchableOpacity, Button, View, ImageBackground} from 'react-native';

//Adding the top part that show "welcome to bot detector"
export default function Bottom() {
   return(
    <ImageBackground source={require("../assets/unnamed.png")} style={styles.BottomImage}> 
    <View style={styles.basic}>
            <Text style = {styles.zero}>0          5</Text> 
        <Text style = {styles.HumanBot}>Human      Bot</Text>            
     </View>
     </ImageBackground>
   )
} 

const styles = StyleSheet.create({
    basic:{
        flex:1
    },
    BottomImage:{
        marginTop: 50,
        width:200,
        height:200,
      },
    zero:{
        textAlign: 'left',
        fontSize:'35',
        fontWeight:'bold',
        color: 'white',
        marginLeft: 40,
    },
    HumanBot:{
        textAlign: 'left',
        fontSize:'25',
        fontWeight:'bold',
        color: 'white',
        marginLeft: 10,
        marginTop: 44,
    }
})