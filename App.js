// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from 'react-native';

// const initialState = {
//   email: '',
//   password: '',
// };
// export default function App() {
//   const [isShowKeyboard, setisShowKeyboard] = useState(false);
//   const signInHandler = () => {
//     setisShowKeyboard(false);
//     Keyboard.dismiss();
//     console.log(state);
//     setState(initialState);
//   };
//   const [state, setState] = useState(initialState);

//   return (
//     <TouchableWithoutFeedback
//       onPress={() => {
//         keyboardHide();
//       }}
//     >
//       <View style={styles.container}>
//         <ImageBackground
//           style={styles.image}
//           source={require('./assets/images/4k.jpg')}
//         >
//           <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           >
//             <View
//               style={{
//                 ...styles.form,
//                 marginBottom: isShowKeyboard ? 20 : 100,
//               }}
//             >
//               <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Hello again!</Text>
//                 <Text style={styles.headerTitle}>Welcome back</Text>
//               </View>
//               <View>
//                 <Text style={styles.inputTitle}> EMAIL </Text>
//                 <TextInput
//                   style={styles.input}
//                   onFocus={() => setisShowKeyboard(true)}
//                   value={state.email}
//                   onChangeText={value => {
//                     setState(prevState => ({ ...prevState, email: value }));
//                   }}
//                 />
//               </View>
//               <View style={{ marginTop: 20 }}>
//                 <Text style={styles.inputTitle}> PASSWORD </Text>
//                 <TextInput
//                   style={styles.input}
//                   secureTextEntry={true}
//                   onFocus={() => setisShowKeyboard(true)}
//                   value={state.password}
//                   onChangeText={value => {
//                     setState(prevState => ({ ...prevState, password: value }));
//                   }}
//                 />
//               </View>
//               <TouchableOpacity style={styles.button} onPress={signInHandler}>
//                 <Text style={styles.btnTitle}>SIGN IN</Text>
//               </TouchableOpacity>
//             </View>

//             <StatusBar style="auto" />
//           </KeyboardAvoidingView>
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },

//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     // alignItems:'center',
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#f0f8ff',
//     borderRadius: 6,
//     backgroundColor: '#fff',
//     padding: 10,
//     // margin: 12,
//   },
//   form: {
//     margin: 12,
//     // marginBottom: 100,
//   },
//   inputTitle: {
//     color: '#212121',
//     marginBottom: 8,
//   },

//   button: {
//     // flex: 1,
//     justifyContent: 'center',
//     // alignItems:'center',
//     backgroundColor: 'purple',
//     borderRadius: 6,
//     marginTop: 12,
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     height: 40,
//     width: 120,
//     padding: 6,
//     // textAlign: 'center',
//     alignItems: 'center',
//     color: '#fff',
//   },

//   btnTitle: {
//     color: '#fff',
//   },

//   header: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   headerTitle: {
//     fontSize: 30,
//     color: 'purple',
//   },
// });
