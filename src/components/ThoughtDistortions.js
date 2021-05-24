import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ThoughtDistortions() {
  return (
    <View style={styles.container}>
              <Image style={styles.l} source={require('../assets/distortions.png')} /> 
                        
          

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
    fontSize: 14,
    // fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir'
  },
   paragraph2: {
    margin: 0,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Avenir'
  },
  l: {
    height: 730,
    width: '100%',
  },
  logo: {
    height: 450,
    width: '100%',
  },
  image: {
    marginTop: 5,
    height: 450,
    width: '100%',
  },
  image2: {
    marginTop: 1,
    height: 200,
    width: '100%',
  },

 
});
