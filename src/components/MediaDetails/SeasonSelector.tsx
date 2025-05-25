import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu } from "react-native-paper";
import Entypo from '@expo/vector-icons/Entypo';

export default function SeasonSelector() {
  return (
    <Menu
      contentStyle={styles.menuContent}
      anchor={
        <TouchableOpacity style={styles.anchorContainer}>
          <Text style={styles.seasonText}>Season 1</Text>
          <Entypo name="chevron-thin-down" size={15} color="#b7b7b7" />
        </TouchableOpacity>
      }
    >

    </Menu>
  )
}

const styles = StyleSheet.create({
  menuContent: {
    marginTop: 5,
    borderRadius: 10
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