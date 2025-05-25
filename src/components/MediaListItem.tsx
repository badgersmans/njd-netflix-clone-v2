import { MediaListData } from '@/types/types'
import { View, Text, StyleSheet, Image } from 'react-native'

type MediaListItemProps = {
  media: MediaListData
}

export default function MediaListItem({media}: MediaListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: media.image}}/>
    </View>
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