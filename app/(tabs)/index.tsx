import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  const openLink = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/carleton.png')} style={styles.image} />
          <Text style={styles.imageText}>Welcome to Carleton</Text>
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hey Carl!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Here is the new CarlsApp! </ThemedText>
        <ThemedText>
          Check out the new design and features, and let us know what you think!
        </ThemedText>
      </ThemedView>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.halfButton]} onPress={() => openLink('https://login.carleton.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s2')}>
          <Text style={styles.buttonText}>Moodle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.halfButton]} onPress={() => openLink('https://login.carleton.edu/idp/profile/SAML2/POST/SSO?execution=e2s1')}>
          <Text style={styles.buttonText}>Workday</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.fullButton]} onPress={() => openLink('https://www.carleton.edu/map/')}>
          <Text style={styles.buttonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.fullButton]} onPress={() => openLink('https://carleton.cafebonappetit.com/')}>
          <Text style={styles.buttonText}>Dining</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.fullButton]} onPress={() => router.push('/transportation')}>
          <Text style={styles.buttonText}>Transportation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.fullButton]} onPress={() => router.push('/calendar')}>
          <Text style={styles.buttonText}>Calendar</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  container: {
    flex: 1,
    backgroundColor: '#F9E79F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  image: {
    width: 500,
    height: 370,
    resizeMode: 'contain',
  },
  imageText: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    height: 60,
  },
  halfButton: {
    flexBasis: '46%', 
    marginBottom: 16, // Adds space between rows
    marginRight: '-2%', // Adds space between buttons in the same row
  },
  fullButton: {
    flexBasis: '100%', // Ensures full buttons have the same width
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
