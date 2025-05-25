import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu } from "react-native-paper";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
import { Season } from "@/types/types";

type SeasonSelectorProps = {
  seasons: Season[],
  selectedSeason: string,
  setSelectedSeason: React.Dispatch<React.SetStateAction<string>>
}

export default function SeasonSelector({seasons, selectedSeason, setSelectedSeason}: SeasonSelectorProps) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

  const onSeasonChanged = (newSeason: string) => {
    setSelectedSeason(newSeason)
    setIsMenuVisible(false)
  }

  return (
    <Menu
      visible={isMenuVisible}
      onDismiss={() => setIsMenuVisible(false)}
      contentStyle={styles.menuContent}
      anchorPosition='bottom'
      anchor={
        <TouchableOpacity style={styles.anchorContainer} onPress={() => setIsMenuVisible(true)}>
          <Text style={styles.seasonText}>{selectedSeason}</Text>
          <Entypo name="chevron-thin-down" size={15} color="#b7b7b7" />
        </TouchableOpacity>
      }
    >
    {seasons.map((season) => (
      <Menu.Item 
        key={season.seasonName} 
        title={season.seasonName} 
        titleStyle={styles.titleStyle}
        style={{height: 40}}
        onPress={() => onSeasonChanged(season.seasonName)}
      />
    ))}
    </Menu>
  )
}

const styles = StyleSheet.create({
  menuContent: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#282828',
  },
  anchorContainer: {
    backgroundColor: '#282828',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal : 10,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5
  },
  seasonText: {
    color: '#B7B7B7',
    fontWeight: '500'
  },
  titleStyle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14
  }
})