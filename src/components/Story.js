import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Story() {
  return (
    <View style={styles.container}>
              <Image style={styles.l} source={require('../assets/colorsquares.png')} /> 
                        <Text style={styles.paragraph}>Here is an example from Kalina.</Text>
              <Text> 


      </Text>
          <Image style={styles.logo} source={require('../assets/1.png')} /> 
           <Text style={styles.paragraph}>
        Kalina was trapped in a traffic jam on the way to work and she felt really pissed. She was trying to remember why she felt that way so she wrote down her traces of thought for that moment.
      </Text>
                <Image style={styles.image} source={require('../assets/2.png')} /> 
                           <Text style={styles.paragraph}>
        Then she took a closer look to what she wrote down and she identified and label any distortions in the thoughts.

      </Text>
                                <Image style={styles.image2} source={require('../assets/3.png')} /> 
                                             <Text style={styles.paragraph}>
        After realizing the distortions, she came up with an alternative hypothesis.

      </Text>

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
    height: 12,
    width: 80,
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
