import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


const App=() => {
  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])
  const starImgFilled='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
  const CustomRatingBar= () =>{
    return (
    <View style={styles.customRatingBarStyle}>
      {
        maxRating.map((item, key) =>{
          return(
            <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={()=> setdefaultRating(item)}>
              <Image  style={styles.starImgStyle}
              source={
                item <= defaultRating
                ? {uri: starImgFilled}
                : {uri: starImgCorner}}         
              /></TouchableOpacity>        
          )
        })
      }     
    </View>
    )
  }
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Please Rate me</Text>
      <CustomRatingBar/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23
  },
  customRatingBarStyle:{
    justifyContent:'center',
    flexDirection:'row',
    marginTop:30
  },
  starImgStyle:{
    width: 40,
    height: 40,
    resizeMode:'cover'
  }
});

export default App;