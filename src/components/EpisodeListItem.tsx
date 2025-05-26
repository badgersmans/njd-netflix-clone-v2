import { Episode } from '@/types/types'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

type EpisodeListItemProps = {
  episode: Episode,
  onPlayPressed: (video?: string, episodeId?: string) => Promise<void>,
  isEpisodeLoading: boolean;
}

export default function EpisodeListItem({episode, onPlayPressed, isEpisodeLoading}: EpisodeListItemProps) {
  const {
    id,
    episodeThumbnail,
    videoUrl,
    episodeTitle,
    episodeNumber,
    duration,
    episodeDescription
  } = episode

  return (
    <TouchableOpacity onPress={() => onPlayPressed(videoUrl, id)} style={styles.topContainer}>
      <View style={styles.container}>
        <ImageBackground source={{uri: episodeThumbnail}} style={styles.imageBackground}>
          {
            isEpisodeLoading ? (
              <ActivityIndicator color='white'/>
            ) : (
              <FontAwesome name="play" size={12} color="white" style={{zIndex: 1}} />
            )
          }
        </ImageBackground>

        <View style={{gap: 3}}>
          <View style={styles.numberTitleContainer}>
            <Text style={styles.episodeTitle}>{episodeNumber}.</Text>
            <Text style={styles.episodeTitle}>{episodeTitle}</Text>
          </View>
          <Text style={styles.episodeDuration}>{duration}m</Text>
        </View>
      </View>

      <Text style={styles.episodeDescription}>{episodeDescription}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor: 'red',
    marginHorizontal: 10,
    marginBottom: 15,
    gap: 8
  },
  container: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  imageBackground: {
    width: 100,
    aspectRatio: 3/2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  },
  numberTitleContainer: {
    flexDirection: 'row',
    gap: 3,
    // backgroundColor: 'green'
  },
  episodeTitle: {
    color: '#ADADAD',
    fontWeight: '700'
  },
  episodeDuration: {
    color: '#999999',
    fontWeight: '500'
  },
  episodeDescription: {
    color: '#ADADAD',
    fontWeight: '500',
    // fontSize: 13,
  },
})