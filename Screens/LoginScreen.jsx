import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const keyboardHide = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    console.log('email:', email, 'password:', password);
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const [state, setState] = useState(initialState);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        keyboardHide();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/images/PhotoBG.jpg')}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
              }}
            >
              <StatusBar style="auto" />
              <TouchableOpacity style={styles.btn} onPress={keyboardHide}>
                <Text style={styles.btnTitle}>Увійти</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => setisShowKeyboard(true)}
                value={email}
                onChangeText={value => {
                  setEmail(value);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry={true}
                onFocus={() => setisShowKeyboard(true)}
                value={password}
                onChangeText={value => {
                  setPassword(value);
                }}
              />
              <Text style={styles.showPass}>Показати</Text>

              <TouchableOpacity>
                <Text style={styles.inputText}>
                  Відсутній аккаунт? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btnTitle: {
    fontSize: 28,

    color: '#fff',
    letterSpacing: 0.01,
    textAlign: 'center',

    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 8,
    padding: 16,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
  },
  showPass: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'right',
    marginRight: 32,
    marginTop: -45,
  },
  btn: {
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputText: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 144,
  },
});
