import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>About</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4eb8',
  },
});

export default About;
