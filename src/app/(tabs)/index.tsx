import { Link } from 'expo-router';
import mediaList from '@assets/data/mediaList.json'
import MediaListItem from '@/components/MediaListItem';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export default function Home() {
  const media = mediaList;

  return (
    <Link href='/about' asChild>
      <FlatList
        data={media}
        renderItem={({item: verticalItems}) => (
          <View>
            <Text style={styles.title}>{verticalItems.title}</Text>

            <FlatList 
              data={verticalItems.data}
              horizontal
              renderItem={({ item: horizontalItems }) => (
                <MediaListItem media={horizontalItems}/>
              )}
            />
          </View>
        )}
      />
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green'
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15
  }
})