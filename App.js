import React,{Component} from "react"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pesquisa from "./screens/Pesquisa";
import Transacao from "./screens/Transacao";
const Tab = createBottomTabNavigator()
export default class App extends Component() {
  render(){
  return (
<NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name = "transação" component={Transacao}/>
    <Tab.Screen name = "pesquisa" component={Pesquisa}/>

</Tab.Navigator>
</NavigationContainer>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
