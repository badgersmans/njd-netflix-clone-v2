import { Link } from 'expo-router';
import mediaList from '@assets/data/mediaList.json'
import MediaListItem from '@/components/MediaListItem';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const media = mediaList;

  return (
    <Link href='/about' asChild>
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <Text style={styles.nameText}>For Shawn</Text>
          <ScrollView contentContainerStyle={styles.categoryContainer} horizontal>
            <Text style={styles.categoryText}>TV Shows</Text>
            <Text style={styles.categoryText}>Movies</Text>
            <Text style={styles.categoryText}>Categories</Text>
          </ScrollView>
        </View>
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
      </SafeAreaView>
    </Link>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 5
    // backgroundColor: 'green',
    // color: 'white'
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  nameText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 10
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15
  }
})