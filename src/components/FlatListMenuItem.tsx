import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}
// This component is "MenuOptions".
const FlatListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation<any>();
    const { theme:{colors} } = useContext(ThemeContext)
    // const { colors } = useTheme()
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigation.navigate(menuItem.component)}>
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={colors.primary}   //'#5856D6'
                    size={23}
                />
                <Text style={{
                    ...styles.itemText,
                    color:colors.text
                }}>
                    {menuItem.name}
                </Text>
                <View style={{ flex: 1 }}></View>
                <Icon
                    name='chevron-forward-outline'
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});



export default FlatListMenuItem
