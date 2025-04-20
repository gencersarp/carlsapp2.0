import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Settings</ThemedText>
      <ThemedText>Configure your app settings here.</ThemedText>
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
});