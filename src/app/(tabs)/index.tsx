import { Link } from 'expo-router';
import mediaList from '@assets/data/mediaList.json'
import MediaListItem from '@/components/MediaListItem';
import { FlatList } from 'react-native';

export default function Home() {
  const media = mediaList;

  return (
    <Link href='/about' asChild>
      <FlatList 
        data={media}
        renderItem={({item}) => (
          <MediaListItem media={item}/>
        )}
      />
    </Link>
  );
}