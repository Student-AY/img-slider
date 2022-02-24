import React , {useState} from 'react'
import { Text, View,StyleSheet, SafeAreaView, Dimensions, ScrollView, Image } from 'react-native'

const images = [
  'https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/02/23/19/46/jewelry-box-2093019_960_720.jpg'
]


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;


const App = () => {
  const [imgActive , setImgActive] = useState(0)

  onchange = (nativeEvent) => {
    if(nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setImgActive(slide)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
        onScroll = {({nativeEvent}) => onchange(nativeEvent)}
        showHorizontalScollIndicator = {false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
          {
           images.map((e, index) =>
           <Image 
           key={e}
           resizeMode = 'stretch'
           style={styles.wrap}
           source={{uri:e}}
           />
           )
          }
          
        </ScrollView>
        <View style={styles.wrapDot}>
          {
            images.map((e , index) => 
            <Text 
            key={e} 
            style = {imgActive == index ? styles.dotActive : styles.dot}
            >
                ●
            </Text>
            )
          }
        </View>
      </View>

    </SafeAreaView>
    

   
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  wrap:{
    width:WIDTH * 1,
    height:HEIGHT * 0.25
  },
  wrapDot:{
    position:"absolute",
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'black'
  },
  dot:{
    margin:3,
    color:'white'
  }
})

export default App