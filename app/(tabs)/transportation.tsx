import { View, Text, StyleSheet, Image } from 'react-native';

export default function TransportationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transportation</Text>
      <Image
        // source={require('@/assets/images/transportation-schedule.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
});