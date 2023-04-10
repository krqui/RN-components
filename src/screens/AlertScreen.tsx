import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            'Titulo', 'This is the message from the alert.',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
            , {
                cancelable: true,
                onDismiss: () => console.log("onDismiss")
            });
    }

    const showPrompt = () => {
        /*Alert.prompt(
            "¿Are you sure?",
            "This action cannot be reversed",
            (valor:string) => console.log('info:',valor),
            'plain-text',
            "Hello world",
            //"number-pad"
        )*/
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: true,
                defaultValue: 'valuerandom',
                placeholder: 'placeholder'
            }
        )
    }
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button
                title='Mostrar Alerta'
                onPress={showAlert}
            />
            <View style={{ height: 10 }} />
            <Button
                title='Mostrar Prompt'
                onPress={showPrompt}
            />
        </View>
    )
}

export default AlertScreen
