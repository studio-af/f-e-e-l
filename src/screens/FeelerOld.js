import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from '../components/AssetExample';
import BrainHbsArticle from '../components/BrainHbsArticle';
import FeelStats from '../components/FeelStats';
import Careeriously from '../components/Careeriously';
import FeelSmarter from '../components/FeelSmarter';
import FeelingFriendzy from '../components/FeelingFriendzy';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const FeelerScreen = ({ navigation }) =>  {
    return (
      <fragment>
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
       f e e l
       
      </Text>
       <Card>
        <BrainHbsArticle/>
      </Card>
      <Text style={styles.breakcard}>       
      </Text>
       <Card>
        <Careeriously/>
      </Card>
      <Text style={styles.breakcard}>       
      </Text>
      <Card>
        <FeelSmarter/>
      </Card>
      <Text style={styles.breakcard}>       
      </Text>
      <Card>
        <FeelingFriendzy/>
      </Card>
       <Text style={styles.breakcard}>       
      </Text>
      <Card>
        <FeelStats/>
      </Card>
        <Text style={styles.breakcard}>       
      </Text>
      <Card>
        <Careeriously/>
      </Card>  
        <Text style={styles.breakcard}>       
      </Text>   
      <Text style={styles.breakcard}>       
      f e e l  feel  f e e l  feel  f e e l  feel  f e e l  feel  f e e l  feel  f e e l  feel  f e e l  feel  f e e l 
      </Text> 
      <Text style={styles.breakcard}>       
      </Text>  
        <Text style={styles.breakcard}>       
      </Text>   
       <Text style={styles.breakcard}>       
      </Text>   
       <Text style={styles.paragraph}>       
      </Text>   
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'normal',
    textAlign: 'left',
    fontFamily: 'Baskerville',
  },
  breakcard: {
    fontSize: 10,
    fontWeight: 'light',
    textAlign: 'center',
    fontFamily: 'Baskerville',
  },
});
