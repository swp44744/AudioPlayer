import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "top"]}>
      <ThemedText>Favorits screen coming soon...</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
