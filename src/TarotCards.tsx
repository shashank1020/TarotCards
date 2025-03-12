import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimatedCard from './AnimatedCard.tsx';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {FONTS} from './font.ts';

const cards = [
  {
    source: require('../assets/images/death.png'),
  },
  {
    source: require('../assets/images/chariot.png'),
  },
  {
    source: require('../assets/images/high-priestess.png'),
  },
  {
    source: require('../assets/images/justice.png'),
  },
  {
    source: require('../assets/images/lover.png'),
  },
  {
    source: require('../assets/images/pendu.png'),
  },
  {
    source: require('../assets/images/tower.png'),
  },
  {
    source: require('../assets/images/strength.png'),
  },
];

function TarotCards() {
  const translateX = useSharedValue(0);
  // useEffect(() => {
  //   translateX.value = withDelay(
  //     1000,
  //     withTiming(100, {duration: 1000, easing: Easing.inOut(Easing.ease)}),
  //   );
  // }, []);
  const style = useAnimatedStyle(() => ({
    transform: [
      {perspective: 2000},
      {rotateX: '-30deg'},
      {translateX: translateX.value},
    ],
  }));
  const shuffleBack = useSharedValue(false);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, style]}>
        <Text style={styles.text}>Tarot Cards</Text>
      </Animated.View>

      {cards.map((img, index) => (
        <React.Fragment key={index}>
          <AnimatedCard card={img} shuffleBack={shuffleBack} index={index} />
        </React.Fragment>
      ))}
    </View>
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
    fontSize: 20,
    fontFamily: FONTS.ZillaSlabHighlight_Bold,
  },
});

export default TarotCards;
