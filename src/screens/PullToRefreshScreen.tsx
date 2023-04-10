import React, { useContext } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemeContext from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
    const { top } = useSafeAreaInsets()
    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext)


    const [refreshing, setRefresing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefresing(true);

        setTimeout(() => {
            console.log("Finished");
            setRefresing(false);
            setData('Hola mundo')
        }, 3500);
    }
    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
                // ↑ This is an alternative for IOS devices.
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    //progressBackgroundColor={colors.background}
                    progressBackgroundColor={dividerColor}
                    colors={[colors.text]}
                    // colors={['white','red',"orange"]}
                    // for IOS ↓
                    //style={{backgroundColor:'#5856D6'}}
                    tintColor={dark ? "white" : "black"}
                    title='Refreshing'
                    titleColor="white"
                />
            }>
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>
    )
}

export default PullToRefreshScreen
