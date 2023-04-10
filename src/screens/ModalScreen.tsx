import React, { useState } from 'react'
import { Button, View, Modal, Text } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title='Modal Screen' />

            <Button
                title='Open modal'
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >

                {/* Background black */}
                <View style={{
                    flex: 1,
                    // height:100
                    // width: 100
                    backgroundColor: "rgba(0,0,0,0.3)",
                    justifyContent: 'center',
                    alignItems: "center",
                }}>
                    {/* Content from the Modal */}
                    <View style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5
                    }}>
                        {/*<HeaderTitle title='Modal' />*/}
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Modal's body</Text>
                        <Button
                            title='Close'
                            onPress={() => setIsVisible(false)} />
                    </View>

                </View>
            </Modal>
        </View>
    )
}

export default ModalScreen
