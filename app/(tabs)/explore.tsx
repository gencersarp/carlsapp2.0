import { StyleSheet, Image, Platform, View, Text, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const openLink = (url: string) => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={styles.container}>
      {/* Top slim bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>HOME</Text>
      </View>

      {/* Image at the top 1/3rd */}
      <Image source={require('@/assets/images/carleton.png')} style={styles.image} />

      {/* Grid of buttons */}
      <View style={styles.buttonGrid}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Button
            key={index}
            title={`Button ${index + 1}`}
            onPress={() => openLink(`/tabs/button${index + 1}`)}
          />
        ))}
      </View>

      {/* Bottom bar */}
      <View style={styles.bottomBar}>
        <Button title="Back" onPress={() => {}} />
        <Button title="Home" onPress={() => {}} />
        <Button title="More" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFD24F', // General background remains yellow
    justifyContent: 'space-between',
  },
  topBar: {
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  buttonGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  button: {
    backgroundColor: '#FFFFFF', 
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 8,
    alignItems: 'flex-start', // Align text to the left
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    height: 60, // Ensures all buttons have the same height
  },
});
