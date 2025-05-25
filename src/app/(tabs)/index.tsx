import { Link } from 'expo-router';
import mediaList from '@assets/data/mediaList.json'
import MediaListItem from '@/components/MediaListItem';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  const media = mediaList;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <View style={styles.nameAndIcon}>
          <Text style={styles.nameText}>For Shawn</Text>
          <AntDesign name="search1" size={24} color="white" style={{marginLeft: 'auto', marginRight: 5}}/>
        </View>
        <ScrollView contentContainerStyle={styles.categoryContainer} horizontal>
          <Text style={styles.categoryText}>TV Shows</Text>
          <Text style={styles.categoryText}>Movies</Text>
          <Text style={styles.categoryText}>Categories</Text>
        </ScrollView>
      </View>
      <FlatList
        data={media}
        renderItem={({ item: verticalItems }) => (
          <View>
            <Text style={styles.title}>{verticalItems.title}</Text>

            <FlatList
              data={verticalItems.data}
              horizontal
              renderItem={({ item: horizontalItems }) => (
                <MediaListItem media={horizontalItems} />
              )}
            />
          </View>
        )}
      />
    </SafeAreaView>
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
  nameAndIcon: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  nameText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 10,
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