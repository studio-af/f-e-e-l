import * as React from 'react';
import {Fragment} from 'react';
import {Text, ScrollView, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from '../components/AssetExample';
import BrainHbsArticle from '../components/BrainHbsArticle';
import FeelStats from '../components/FeelStats.js';
import Careeriously from '../components/Careeriously.js';
import FeelSmarter from '../components/FeelSmarter.js';
import FeelingFriendzy from '../components/FeelingFriendzy.js';
import Story from '../components/Story.js';
import Prototype from '../components/Prototype.js';

import StoryScreen from './StoryScreen.js';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const FeelHomeCopyScreen = ({ navigation }) =>  {
    return (
        <Fragment>
            <ScrollView Style={styles.container}>
                <Text style={styles.breakcard}>
             
                </Text>
 <Card>
                    <Prototype/>
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
        </Fragment>

    );
}

export default FeelHomeCopyScreen;

const styles = StyleSheet.create({
      container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
    logo: {
        height: 10,
        width: 128,
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
        fontWeight: '100',
        textAlign: 'left',
        paddingLeft: 10,
        fontFamily: 'Baskerville',
    },
});