import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Link href='/about' asChild>
      <Text>tabs</Text>
    </Link>
  );
}