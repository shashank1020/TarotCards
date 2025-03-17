import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {snapPoint} from 'react-native-redash';

// Get screen dimensions
const {width, height} = Dimensions.get('window');
const aspectRatio = 722 / 368;
const CARD_WIDTH = width - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const CARD_PADDING = 8;
const IMAGE_WIDTH = CARD_WIDTH - CARD_PADDING * 2;
const DURATION = 250;
const side = (width + CARD_WIDTH + 260) / 2;
const sideH = (height + CARD_HEIGHT + 100) / 2;

// Define snap points for X and Y axis
const SNAP_POINTS_X = [-side, 0, side];
const SNAP_POINTS_Y = [-sideH, 0, sideH];

interface CardProps {
  card: {
    source: ReturnType<typeof require>;
  };
  shuffleBack: SharedValue<boolean>;
  index: number;
}

function AnimatedCard({card: {source}, index, shuffleBack}: CardProps) {
  // Shared values for animation
  const offset = useSharedValue({x: 0, y: 0});
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-height); // Initial position off-screen (top)
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(0);
  const rotateX = useSharedValue(30);
  const perspectiveX = useSharedValue(1500);
  const delay = index * DURATION;
  const theta = -10 + Math.random() * 20; // Random initial rotation between -10 to 10 degrees

  useEffect(() => {
    // Drop cards from top on mount
    translateY.value = withDelay(
      delay,
      withTiming(0, {duration: DURATION, easing: Easing.inOut(Easing.ease)}),
    );
    rotateZ.value = withDelay(delay, withSpring(theta));
  }, [delay, index, rotateZ, theta, translateY]);

  // Listen for shuffleBack trigger and reset card positions
  useAnimatedReaction(
    () => shuffleBack.value,
    v => {
      if (v) {
        const duration = 150 * index;
        translateX.value = withDelay(
          duration,
          withSpring(0, {}, () => {
            shuffleBack.value = false;
          }),
        );
        translateY.value = withDelay(
          duration,
          withSpring(0, {}, () => {
            shuffleBack.value = false;
          }),
        );
        rotateZ.value = withDelay(duration, withSpring(theta));
      }
    },
  );

  // Gesture for dragging the card
  const panGesture = Gesture.Pan()
    .onBegin(() => {
      // Store the initial position when gesture starts
      offset.value = {x: translateX.value, y: translateY.value};
      rotateZ.value = withTiming(0); // Reset rotation when dragging starts
      scale.value = withTiming(1.1); // Scale up slightly for effect
      perspectiveX.value = withTiming(10000); // Change perspective for depth effect
      rotateX.value = withTiming(0);
    })
    .onUpdate(event => {
      // Update card position based on gesture movement
      translateY.value = event.translationY + offset.value.y;
      translateX.value = event.translationX + offset.value.x;
    })
    .onEnd(event => {
      // Snap to nearest point on release
      const dist = snapPoint(translateX.value, event.velocityX, SNAP_POINTS_X);
      const distY = snapPoint(translateY.value, event.velocityY, SNAP_POINTS_Y);
      translateX.value = withSpring(dist, {
        velocity: event.velocityX,
        damping: 100,
      });
      translateY.value = withSpring(distY, {
        velocity: event.velocityY,
        damping: 100,
      });
      scale.value = withTiming(1, {}, () => {
        const isLast = index === 0;
        if (isLast && (dist !== 0 || distY !== 0)) {
          shuffleBack.value = true;
        }
      });
      const theta = -10 + Math.random() * 20;
      rotateZ.value = withSpring(theta);
      perspectiveX.value = withTiming(1500);
      rotateX.value = withTiming(30);
    })
    .onFinalize(event => {
      console.log('Finalized Card');
      const dist = snapPoint(translateX.value, event.velocityX, SNAP_POINTS_X);
      const distY = snapPoint(translateY.value, event.velocityY, SNAP_POINTS_Y);
      scale.value = withTiming(1, {}, () => {
        const isLast = index === 0;
        if (isLast && (dist !== 0 || distY !== 0)) {
          shuffleBack.value = true;
        }
      });
      const theta = -10 + Math.random() * 20;
      rotateZ.value = withSpring(theta);
      perspectiveX.value = withTiming(1500);
      rotateX.value = withTiming(30);
    });

  // Apply animated styles to the card
  const style = useAnimatedStyle(() => ({
    transform: [
      {perspective: perspectiveX.value},
      {translateY: translateY.value},
      {translateX: translateX.value},
      {scaleX: scale.value},
      {rotateY: `${rotateZ.value / 10}deg`},
      {rotateZ: `${rotateZ.value}deg`},
      {rotateX: `${rotateX.value}deg`},
    ],
  }));

  return (
    <View
      style={[styles.container, {zIndex: 1 + index}]}
      pointerEvents={'box-none'}
      key={index}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.card, style]}>
          <Image
            source={source}
            style={[styles.image]}
            resizeMode={'contain'}
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    padding: CARD_PADDING,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0.6,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * aspectRatio,
  },
});

export default AnimatedCard;
