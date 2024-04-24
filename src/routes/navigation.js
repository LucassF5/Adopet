import { Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../paginas/Home'
import Login from '../paginas/Login'
import Cadastro from '../paginas/Cadastro'
import ListaPets from '../paginas/ListaPets'
import Mensagem from '../paginas/Mensagem'
import Sobre from '../paginas/Sobre'
import Perfil from '../paginas/Perfil'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#36D6AD"
                },
                drawerLabelStyle: {
                    color: "#FFF",
                    fontSize: 14,
                    fontFamily: "PoppinsRegular",
                    fontWeight: "400",
                    lineHeight: 20
                }
            }}>
            <Drawer.Screen name='Lista de Pets'
                component={TabRoutes}
                options={{
                    drawerLabel: "Pets para adoção", // que é mostrado no display
                    drawerIcon: () => (<Image source={require("../assets/pets.png")}
                        style={{ width: 24, height: 24 }} />),
                    headerTransparent: true, //cabeçalho transparente
                    title: "" // título da página vazio
                }} />
            <Drawer.Screen name='Perfil'
                component={Perfil}
                options={{
                    drawerLabel: "Perfil", // que é mostrado no display
                    drawerIcon: () => (<Image source={require("../assets/settings.png")}
                        style={{ width: 24, height: 24 }} />),
                    headerTransparent: true, //cabeçalho transparente
                    title: "" // título da página vazio
                }} />
            <Drawer.Screen name='Home'
                component={Home}
                options={{
                    drawerLabel: "Sair", // que é mostrado no display
                    drawerIcon: () => (<Image source={require("../assets/logout.png")}
                        style={{ width: 24, height: 24 }} />),
                    headerTransparent: true, //cabeçalho transparente
                    title: "" // título da página vazio
                }} />
        </Drawer.Navigator>
    )
}

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name='Lista de Pets'
                component={ListaPets}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/pets-green.png')}
                            style={{ width: 24, height: 24 }} />
                    )
                }} />
            <Tab.Screen name='Mensagem'
                component={Mensagem}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/mensagens.png')}
                            style={{ width: 24, height: 24 }} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerTitle: "", //Titulo do cabeçalho das Stacks
                    headerShown: false // Mostrar cabeçalho
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Drawer" component={DrawerRoutes} />
                <Stack.Screen name="Sobre" component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}