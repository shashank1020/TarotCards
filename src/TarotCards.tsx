import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AnimatedCard from './AnimatedCard.tsx';
import {useSharedValue} from 'react-native-reanimated';
import FONTS from '../assets/fonts';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const cards = [
  {source: require('../assets/images/world.png')},
  {source: require('../assets/images/lover.png')},
  {source: require('../assets/images/judegment.png')},
  {source: require('../assets/images/pendu.png')},
  {source: require('../assets/images/chariot.png')},
  {source: require('../assets/images/wheel.png')},
  {source: require('../assets/images/fool.png')},
  {source: require('../assets/images/high-priestess.png')},
  {source: require('../assets/images/moon.png')},
  {source: require('../assets/images/tower.png')},
  {source: require('../assets/images/devil.png')},
  // {source: require('../assets/images/sun.png')},
  // {source: require('../assets/images/strength.png')},
  // {source: require('../assets/images/temperance.png')},
  // {source: require('../assets/images/death.png')},
  // {source: require('../assets/images/justice.png')},
  // {source: require('../assets/images/hermit.png')},
];

function TarotCards() {
  const navigation = useNavigation<any>();
  const shuffleBack = useSharedValue(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#4d4eb8'}}>
      <GestureHandlerRootView>
        <View style={styles.container}>
          <View style={[styles.header]}>
            <Text style={styles.text}>Tarot Cards</Text>
          </View>
          <TouchableOpacity
            style={styles.about}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.text2}>About ➡</Text>
          </TouchableOpacity>
          {cards.map((img, index) => (
            <React.Fragment key={index}>
              <AnimatedCard
                card={img}
                shuffleBack={shuffleBack}
                index={index}
              />
            </React.Fragment>
          ))}
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'rgba(239,238,238,0.3)',
    fontSize: 24,
    fontFamily: FONTS.ZillaSlabHighlight_Bold,
  },
  text2: {
    // backgroundColor: 'red',
    fontSize: 12,
    color: '#FFF',
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.67)',
    // fontFamily: FONTS.MajorMonoDisplay_Regular,
    // textDecorationLine: 'underline',
  },
  about: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    // position: 'absolute',
    marginRight: 10,
    marginTop: 5,

    // backgroundColor: 'red',
  },
});

export default TarotCards;
