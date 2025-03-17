import React from 'react';
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = () => {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't open URL", err));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Shashank Mourya</Text>
        <Text style={styles.subHeader}>React Native Developer</Text>

        <Text style={[styles.description, {fontSize: 14}]}>
          This project features an interactive card animation built using React
          Native Reanimated. The cards smoothly enter the screen, respond to
          gestures, and snap back with physics-based motion. Try dragging a card
          around, and let the magic of animations do its thing! 🚀
        </Text>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.description}>Animation Mechanics:</Text>
          <Text style={styles.bullet}>
            • Each card drops from the top with a randomized rotation angle,
            creating a dynamic entry.
          </Text>
          <Text style={styles.bullet}>
            • When a card is picked up, its scale increases slightly to simulate
            a real-life lift effect.
          </Text>
          <Text style={styles.bullet}>
            • Perspective and rotation adjust dynamically to enhance the 3D
            feel.
          </Text>
          <Text style={styles.bullet}>
            • Upon release, the card snaps to the nearest valid position using
            physics-based motion.
          </Text>
          <Text style={styles.bullet}>
            • The angle is randomized again on drop, ensuring a natural and
            playful interaction.
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.description}>Developer funny quote 😁!</Text>
          <Text style={styles.quote}>
            “Software developers like their coffee like they like their bugs…
            hidden.”
          </Text>
          <Text style={styles.quote}>
            “Why do programmers prefer dark mode? Because light attracts bugs!”
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Pressable
            onPress={() => openLink('mailto:shashankmaurya1020@gmail.com')}>
            <Text style={styles.link}>✉ shashankmaurya1020@gmail.com</Text>
          </Pressable>

          <Pressable onPress={() => openLink('tel:+917302803506')}>
            <Text style={styles.link}>📞 +91 7302803506</Text>
          </Pressable>

          <Pressable onPress={() => openLink('https://linkedin.com')}>
            <Text style={styles.link}>🔗 LinkedIn</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bullet: {
    fontSize: 16,
    textAlign: 'left',
    // marginLeft: 20,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  quote: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    marginVertical: 5,
  },
  infoContainer: {
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
});

export default AboutScreen;
