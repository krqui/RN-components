import React from 'react'
import { FlatList, Text, View } from 'react-native'
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';


const HomeScreen = () => {


  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <HeaderTitle title='Menu options' />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  )
}

export default HomeScreen
