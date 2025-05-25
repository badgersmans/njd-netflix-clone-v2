import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu } from "react-native-paper";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
import { Season } from "@/types/types";

type SeasonSelectorProps = {
  seasons: Season[],
  selectedSeason: string
}

export default function SeasonSelector({seasons, selectedSeason}: SeasonSelectorProps) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

  return (
    <Menu
      visible={isMenuVisible}
      onDismiss={() => setIsMenuVisible(false)}
      contentStyle={styles.menuContent}
      anchorPosition='bottom'
      anchor={
        <TouchableOpacity style={styles.anchorContainer} onPress={() => setIsMenuVisible(true)}>
          <Text style={styles.seasonText}>Season 1</Text>
          <Entypo name="chevron-thin-down" size={15} color="#b7b7b7" />
        </TouchableOpacity>
      }
    >
    {seasons.map((season) => (
      <Menu.Item key={season.seasonName} title={season.seasonName} titleStyle={{color: 'white'}}/>
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
})