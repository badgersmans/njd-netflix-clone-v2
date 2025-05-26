import { useLocalSearchParams } from 'expo-router'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import mediaDetailsList from '@assets/data/mediaDetailedList.json'
import MediaInfo from '@/components/MediaDetails/MediaInfo'
import { useVideoPlayer, VideoView } from 'expo-video'
import MediaHeader from '@/components/MediaDetails/MediaHeader'
import { useEffect, useRef, useState } from 'react'
import SeasonSelector from '@/components/MediaDetails/SeasonSelector'
import { Episode } from '@/types/types'
import EpisodeListItem from '@/components/EpisodeListItem'

export default function MediaDetails() {
  const {id} = useLocalSearchParams()
  const [selectedSeason, setSelectedSeason] = useState<string>('Season 1')
  const [seasonEpisodes, setSeasonEpisodes] = useState<Episode[]>([])
  const [episodeLoadingId, setEpisodeLoadingId] = useState<string>(null)
  const videoViewRef = useRef<VideoView | null>(null);

  const mediaDetails = mediaDetailsList.find((media) => media.id === id)
  const { thumbnail, seasons, type } = mediaDetails
  const videoSource = mediaDetails?.type === 'MOVIE' 
    ? mediaDetails.trailer
    : mediaDetails?.seasons?.[0].episodes?.[0].videoUrl

  useEffect(() => {
    if(!mediaDetails || mediaDetails.type !== 'TV_SERIES') return

    const season = mediaDetails.seasons?.find((season) => season.seasonName === selectedSeason)
    // console.log(season)
    setSeasonEpisodes(season?.episodes || [])
  }, [selectedSeason])

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

  const onPlayPressed = async (video?: string, episodeId?: string) => {
    trailerPlayer.pause()
    if(video && episodeId) {
      setEpisodeLoadingId(episodeId)
      await mediaPlayer.replaceAsync(video)
      setEpisodeLoadingId(null)
    }

    videoViewRef.current?.enterFullscreen()
    mediaPlayer.play()
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <MediaHeader
        thumbnail={thumbnail}
        trailerPlayer={trailerPlayer}
        mediaPlayer={mediaPlayer}
        videoViewRef={videoViewRef}
      />
      <FlatList 
        data={seasonEpisodes}
        renderItem={({item}) => (
          <EpisodeListItem 
            episode={item} 
            onPlayPressed={onPlayPressed}
            isEpisodeLoading={episodeLoadingId === item.id}
          />
        )}
        ListHeaderComponent={
          <View style={{ padding: 10, gap: 5 }}>
            <MediaInfo media={mediaDetails} onPlayPressed={onPlayPressed}/>
            {(type === 'TV_SERIES' && !!seasons) && (
              <SeasonSelector 
                seasons={seasons}
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
              />
            )}
          </View>
        }
      />
    </SafeAreaView>
  )
}