import { Text, View } from "react-native";
import Login from './../components/Login';
import Header from './tabs/Header';
import MainPage from './tabs/MainPage';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,

      }}
    >
    <Login />
    {/* <MainPage /> */}
    
    </View>
  );
}
