import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Media } from '@/types/types'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type MediaInfoProps = {
  media: Media
}

export default function MediaInfo({media}: MediaInfoProps) {
  return (
    <View>
      <Text style={styles.title}>{media.title}</Text>

      <View style={styles.metadataContainer}>
        <Text style={styles.metaInfoText}>{media.releaseYear}</Text>
        <Text style={styles.age}>{media.ageRestriction}</Text>
        <Text style={styles.metaInfoText}>{media.type === 'MOVIE' ? `${media.duration} minutes`  : `${media.seasons.length} seasons`}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => console.log('pressed...')}>
        <FontAwesome5 name="play" size={24} color="black" />
        <Text style={styles.playPauseText}>Play</Text>
      </TouchableOpacity>

      <Text style={styles.description}>{media.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5
  },
  metadataContainer: {
    flexDirection: 'row',
    gap: 8
  },
  description: {
    color: 'white'
  },
  metaInfoText: {
    color: 'white',
    fontSize: 12
  },
  age: {
    color: 'white',
    fontSize: 10,
    padding: 2,
    backgroundColor: '#636363',
    borderRadius: 4
  },
  button: {
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginVertical: 10
  },
  playPauseText: {
    // color: 'white',
    fontWeight: 'bold'
  },
})