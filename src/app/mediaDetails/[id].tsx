import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import mediaDetailsList from '@assets/data/mediaDetailedList.json'
import MediaInfo from '@/components/MediaDetails/MediaInfo'
import { useVideoPlayer, VideoView } from 'expo-video'
import MediaHeader from '@/components/MediaDetails/MediaHeader'
import { useRef } from 'react'

export default function MediaDetails() {
  const {id} = useLocalSearchParams()
  const videoViewRef = useRef<VideoView | null>(null);

  const mediaDetails = mediaDetailsList.find((media) => media.id === id)
  const { thumbnail } = mediaDetails
  const videoSource = mediaDetails?.type === 'MOVIE' 
    ? mediaDetails.trailer
    : mediaDetails?.seasons?.[0].episodes?.[0].videoUrl

  // console.log(mediaDetails)
  if(!mediaDetails) {
    return <Text style={{color: 'white'}}>Not found...</Text>
  }
  if(!videoSource) {
    return <Text style={{color: 'white'}}>Not found...</Text>
  }

  // console.log(videoSource)

  const trailerPlayer = useVideoPlayer(videoSource, player => {
    player.currentTime = 10
    player.play();
  });

  const mediaPlayer = useVideoPlayer(videoSource, player => {
    player.showNowPlayingNotification = true;
  });

  const onPlayPressed = () => {
    trailerPlayer.pause()
    videoViewRef.current?.enterFullscreen()
    mediaPlayer.play()
  }

  return (
    <SafeAreaView>
      <MediaHeader
        thumbnail={thumbnail}
        trailerPlayer={trailerPlayer}
        mediaPlayer={mediaPlayer}
        videoViewRef={videoViewRef}
      />
      <MediaInfo media={mediaDetails} onPlayPressed={onPlayPressed}/>
    </SafeAreaView>
  )
}