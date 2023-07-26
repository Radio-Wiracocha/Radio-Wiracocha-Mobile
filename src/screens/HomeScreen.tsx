import { Alert, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Song from '../components/Song'
import { Asset } from 'expo-media-library'
import * as MediaLibrary from 'expo-media-library';
import { ThunkDispatch } from 'redux-thunk'
import { setPlaylist } from '../store/playlist/action'
import { connect } from 'react-redux'

function HomeScreen(props: any) {
    const [, setAudioFiles] = useState<Asset[]>([]);
    const [filteredAudioFiles, setFilteredAudioFiles] = useState<Asset[]>([]);

    const getAudioFiles = async () => {
        let audio = await MediaLibrary.getAssetsAsync({ mediaType: 'audio' });
        audio = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio', first: audio.totalCount,
        });

        return audio.assets;
    };

    const filterFiles = (files: Asset[]) => files.filter((file) => {
        const mp3 = file.filename.endsWith('.mp3');
        const duration = file.duration > 10;
        return mp3 && duration;
    });

    useEffect(() => {
        getPermission().then((files) => {
            setAudioFiles(filterFiles(files));
            props.updatePlaylist(filterFiles(files));
            setFilteredAudioFiles(filterFiles(files));
        });
    }, []);

    // Permisions needed to acces to local files with expo-library
    const permissionAlert = () => {
        Alert.alert('Permission required', 'Application needs to read audio files', [
            {
                text: 'Allow',
                onPress: () => getPermission(),
            }, {
                text: 'Deny',
                onPress: () => permissionAlert(),
            },
        ]);
    };

    const getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync();

        let files: Asset[] = [];

        if (permission.granted) {
            files = await getAudioFiles();
        } else if (!permission.granted && permission.canAskAgain) {
            const {
                status, canAskAgain,
            } = await MediaLibrary.requestPermissionsAsync();

            if (status === 'denied') {
                // denied
                permissionAlert();
            } else {
                files = await getAudioFiles();
            }
        } else {
            permissionAlert();
        }

        return filterFiles(files);
    };

    const navigate = (route: any) => {
        props.navigation.navigate(route);
    };

    return (
        <View>
            <ScrollView>
                {filteredAudioFiles.map((audio: Asset, i: number) => (
                    <Song
                        key={i}
                        index={i}
                        audio={audio}
                        navigate={navigate}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, any>) => ({
    updatePlaylist: (playlist: Asset[] | null) => dispatch(setPlaylist(playlist)),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
