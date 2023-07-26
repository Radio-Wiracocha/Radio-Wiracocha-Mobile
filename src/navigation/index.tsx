import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { RootTabParamList, RootTabScreenProps } from "../../generalConf";
import { Ionicons } from '@expo/vector-icons';
import { ColorSchemeName } from "react-native";
import useColorScheme from "../utils/hooks/useColorScheme";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from "../utils/Colors";
import { RootStackParamList } from "./StackScreenProps";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LinkingConf from "./LinkingConf";
import SettingsScreen from "../screens/SettingsScreen";
import { HomeScreen, LibraryScreen, LoginScreen } from "../screens/Index";
import DetailedPlayerScreen from "../screens/DetailedPlayerScreen";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
}) {
    return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint
            }}
        >
            <BottomTab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
                    title: 'Songs',
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                })}
            />
            <BottomTab.Screen
                name="DetailedPlayerScreen"
                component={DetailedPlayerScreen}
                options={{
                    title: 'Song Player',
                    tabBarIcon: ({ color }) => <TabBarIcon name="musical-notes" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="LibraryScreen"
                component={LibraryScreen}
                options={{
                    title: 'Library',
                    tabBarIcon: ({ color }) => <TabBarIcon name="albums" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <TabBarIcon name="settings-sharp" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConf}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}
