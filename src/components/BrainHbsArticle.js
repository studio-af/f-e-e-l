import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function BrainHbsArticle() {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/colorsquares.png')} /> 
      <Text style={styles.paragraph}>
        The brain processes a provocation by a boss, competitive coworker, or dismissive subordinate as a <Text style={styles.paragraphred}> life-or-death threat
      </Text>  </Text>
      
       <Image style={styles.image} 
          source={{
          uri: 'https://foreignpolicy.com/wp-content/uploads/2019/07/GettyImages-810187496.jpg?resize=1536,1069&amp;quality=90',
          // uri: 'https://static.independent.co.uk/2021/02/03/15/GettyImages-139038773.jpg?width=982&height=726&auto=webp&quality=75',
        }} /> 
     
      <Text style={styles.paragraphG}>
      TOGETHER <Text style={styles.paragraphlightG}>
    we can keep our cool
      </Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    padding: 10,
  },
  paragraph: {
    margin: 0,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir'
  },
   paragraphred: {
    margin: 0,
    marginTop: 10,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir'
  },

    paragraphG: {
    margin: 0,
    marginTop: 10,
    fontSize: 14,
    // fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir-Heavy'
  },
  paragraphlightG: {
    margin: 0,
    marginTop: 10,
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Baskerville-Italic'
  },

  logo: {
    height: 12,
    width: 80,
  },
  image: {
  marginTop: 10,
   height: 250, 
   width: '100%',
  }
});
