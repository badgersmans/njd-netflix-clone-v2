import { VideoPlayer, VideoView } from 'expo-video'
import { View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { useState } from 'react';

type MediaHeaderProps = {
  thumbnail: string,
  trailerPlayer: VideoPlayer,
  mediaPlayer: VideoPlayer,
  videoViewRef: React.RefObject<VideoView | null>
}

export default function MediaHeader(props: MediaHeaderProps) {
  const {thumbnail, trailerPlayer, mediaPlayer, videoViewRef} = props
  const [isTrailerLoading, setIsTrailerLoading] = useState(true)
  const [isMediaLoading, setIsMediaLoading] = useState(true)
  

  return (
    <View style={styles.container}>
      <AntDesign
        name="closecircle"
        size={24}
        color="#3b3b3b"
        style={styles.closeIcon}
        onPress={() => router.back()}
      />
      {isTrailerLoading && (
        <ImageBackground source={{uri: thumbnail}} style={[StyleSheet.absoluteFill, styles.imageBackground]} >
          <ActivityIndicator size={'large'} color='white' />
        </ImageBackground>
      ) }

      <VideoView
        player={trailerPlayer}
        style={StyleSheet.absoluteFill}
        onFirstFrameRender={() => setIsTrailerLoading(false)}
      />
      <VideoView
        player={mediaPlayer}
        ref={videoViewRef}
        onFirstFrameRender={() => setIsMediaLoading(false)}
        style={StyleSheet.absoluteFill}
      />
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
    justifyContent: 'center'
  },
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 10,
    zIndex: 1
  }
})