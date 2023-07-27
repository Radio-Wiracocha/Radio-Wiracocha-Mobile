import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import MessageScreen from './src/screens/MessageScreen';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

export type RootTabParamList = {
    HomeScreen: undefined;
    DetailedPlayerScreen: undefined;
    SettingsScreen: undefined;
    LibraryScreen: undefined;
    MessageScreen: undefined;
    LoginScreen: undefined;
    DetailScreen: { id: string; name: string; imageUrl: string; description: string, category: string }; // Añadir 'DetailScreen' aquí
};

export type RootStackParamList = {
    HomeScreen: { id: string };
    LoginScreen: { id: string };
    DetailScreen: { id: string; name: string; imageUrl: string; description: string, category: string }; // Añadir 'DetailScreen' aquí
}


export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;