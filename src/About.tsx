import React from 'react';
import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';

const AboutScreen = () => {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't open URL", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shashank Mourya</Text>
      <Text style={styles.subHeader}>React Native Developer</Text>

      <Text style={styles.description}>
        This project features an interactive card animation built using React
        Native Reanimated. The cards smoothly enter the screen, respond to
        gestures, and snap back with physics-based motion. Try dragging a card
        around, and let the magic of animations do its thing! 🚀
      </Text>

      <Text style={styles.quote}>
        “Why do programmers prefer dark mode? Because light attracts bugs!”
      </Text>

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
    </View>
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
    marginBottom: 20,
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
