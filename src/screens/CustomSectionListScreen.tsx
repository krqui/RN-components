import React, { useContext } from 'react'
import { Text, SectionList, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import ItemSeparator from '../components/ItemSeparator'
import ThemeContext from '../context/themeContext/ThemeContext'
interface Houses {
    house: string,
    data: string[]
}

const houses: Houses[] = [
    {
        house: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin"]
    },
    {
        house: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman"]
    },
    {
        house: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama"]
    },
]
const CustomSectionListScreen = () => {
    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext)
    return (
        <View style={{ ...styles.globalMargin, flex: 1 }} >
            {/*<HeaderTitle title='Section List' />*/}
            <SectionList
                sections={houses}
                keyExtractor={(item, index) => item + index}// sumamos ambos datos para evitar que se repita el key en al menos 2 elementos.

                ListHeaderComponent={() => <HeaderTitle title='Section List' />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitle title={"Total de casas " + houses.length} />
                    </View>
                )}

                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                stickySectionHeadersEnabled // para android

                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={section.house} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                )}

                // SectionSeparatorComponent={()=><ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CustomSectionListScreen
