import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import mediaDetailsList from '@assets/data/mediaDetailedList.json'

export default function MediaDetails() {
  const {id} = useLocalSearchParams()
  const mediaDetails = mediaDetailsList.find((media) => media.id === id)
  // console.log(mediaDetails)
  if(!mediaDetails) {
    return <Text style={{color: 'white'}}>Not found...</Text>
  }
 
  return (
    <SafeAreaView>
      <Text style={{color: 'white'}}>{mediaDetails?.title}</Text>
    </SafeAreaView>
  )
}