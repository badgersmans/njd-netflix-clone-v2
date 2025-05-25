import { MediaListData } from '@/types/types'
import { Link } from 'expo-router'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

type MediaListItemProps = {
  media: MediaListData
}

export default function MediaListItem({media}: MediaListItemProps) {
  return (
    <Link href={`/mediaDetails/${media.id}`} style={styles.container} asChild>
      <TouchableOpacity>
        <Image style={styles.image} source={{uri: media.image}}/>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green'
  },
  image: {
    width: 110,
    aspectRatio: 3/4,
    marginHorizontal: 5,
    borderRadius: 10
  }
})