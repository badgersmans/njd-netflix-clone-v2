import { VideoPlayer } from 'expo-video'
import { View, StyleSheet, ImageBackground } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

type MediaHeaderProps = {
  thumbnail: string,
  trailerPlayer: VideoPlayer,
  mediaPlayer: VideoPlayer,
}

export default function MediaHeader(props: MediaHeaderProps) {
  const {thumbnail, trailerPlayer, mediaPlayer} = props
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: thumbnail}} style={[StyleSheet.absoluteFill, styles.imageBackground]} >
        <AntDesign
          name="closecircle"
          size={24}
          color="#3b3b3b"
          style={styles.closeIcon}
          onPress={() => router.back()}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 226,
    // backgroundColor: 'red'
    // width: '100%'
  },
  imageBackground: {
    opacity: 0.6,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 10
  }
})