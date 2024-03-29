import { ParamListBase, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface IStackScreenProps {
    nameProp: string,
    navigation: StackNavigationProp<any>,
    route: RouteProp<ParamListBase, any>
}

export type RootStackParamList = {
    HomeScreen: { id: string };
    LoginScreen: { id: string };
    DetailScreen: { id: string; name: string; imageUrl: string; category: string }; 
}