import React, { useContext } from 'react'
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useForm } from '../hooks/useForm'
import CustomSwitch from '../components/CustomSwitch'
import ThemeContext from '../context/themeContext/ThemeContext'

const TextInputScreen = () => {

  const { form, onChange, isSubscribed } = useForm({
    name: "",
    email: "",
    phone: "",
    isSubscribed: false
  })

  const { theme: { colors, dividerColor } } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title='TextInputs' />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder='Insert your name'
              autoCorrect={false}
              autoCapitalize='words'
              onChangeText={(value) => onChange(value, "name")}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder='Insert your email'
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => onChange(value, "email")}
              keyboardType='email-address'
              keyboardAppearance='dark'
              placeholderTextColor={dividerColor}
            />
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>Subscribe</Text>
              <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, "isSubscribed")} />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
              placeholder='Insert your phone number.'
              onChangeText={(value) => onChange(value, "phone")}
              keyboardType='phone-pad'
              placeholderTextColor={dividerColor}
            />

            <View style={{ height: 100 }}></View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical: 10
  },
  switchText: {
    fontSize: 25
  }
});

export default TextInputScreen
