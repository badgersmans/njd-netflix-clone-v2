import { MediaList } from '@/types/types'
import { View, Text, StyleSheet } from 'react-native'

type MediaListItemProps = {
  media: MediaList
}

export default function MediaListItem({media}: MediaListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{media.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  }
})