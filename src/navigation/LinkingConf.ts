import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../generalConf';

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    HomeScreen: {
                        screens: {
                            PlaylistScreen: 'Songs',
                        },
                    },
                    DetailedPlayerScreen: {
                        screens: {
                            PlayerScreen: 'DetailedPlayer',
                        },
                    },
                    LibraryScreen: {
                        screens: {
                            LibraryScreen: 'LibraryScreen',
                        },
                    },
                    SettingsScreen: {
                        screens: {
                            SettingsScreen: 'Settings'
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};

export default linking;