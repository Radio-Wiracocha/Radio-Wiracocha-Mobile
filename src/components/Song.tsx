import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Asset } from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setCurrentPlayingAudio } from '../store/audio/action';
import { rootState } from '../models/reduxState';
import { connect } from 'react-redux';

import Colors from '../utils/Colors';
import { getAssetTitle, getDurationAsString } from '../utils/functions';

// MARK: Song that will be showed in list -> playlist
function Song(props: any) {
    const play = 'play-circle';
    const pause = 'pause-circle';
    const size = 48;
    const [iconName, setIconName] = useState<any>(props.isPlaying ? pause : play);

    useEffect(() => {
        setIconName(props.isPlaying ? pause : play);
    }, [props.isPlaying]);

    const handleSongAction = () => {
        if (!props.isPlaying) {
            props.playSong(props.audio, props.index);
            props.navigate('Player');
        } else {
            props.playSong(null, -1);
        }
    };

    return (
        <TouchableOpacity onPress={handleSongAction}>
            <View style={[styles.container]}>
                <View style={styles.row}>
                    <Ionicons name={iconName} size={size} color={'#FF6A68'} />
                    <View style={styles.songContainer}>
                        <Text style={styles.name} numberOfLines={1}>
                            {getAssetTitle(props.audio)}
                        </Text>
                        <Text style={styles.duration} numberOfLines={1}>
                            {getDurationAsString(props.audio.duration * 1000)}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        marginStart: '5%',
        marginEnd: '5%',
        marginTop: 15,
    },
    songContainer: {
        marginTop: 9
    },
    columnSongImage: {
        width: 50,
        height: 50,
        flexDirection: 'column',
        margin: 0
    },
    row: {
        flexDirection: 'row',
        margin: 0,
    },
    songImage: {
        width: '100%',
        height: '100%',
    },
    imageMenu: {
        width: 20,
        height: 20,
        marginTop: 10
    },
    containerMenu: {
        width: '10%',
        flexDirection: 'column',
        margin: 0,
        alignItems: 'flex-end',
    },
    songTitle: {
        alignContent: 'flex-start',
    },
    songInformation: {
        width: '75%',
        height: 50,
        flexDirection: 'column',
        margin: 0,
        padding: 5,
        paddingStart: 11
    },
    bold: {
        fontWeight: 'bold'
    },
    name: {
        fontSize: 16,
        color: '#5391E2',
    },
    duration: {
        fontSize: 9,
        color: Colors.dark.tint,
    },
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, AnyAction>) => ({
    playSong: (audio: Asset | null, index: number) => dispatch(setCurrentPlayingAudio(audio, index)),
});

const mapStateToProps = (state: rootState, ownProps: any) => ({
    ...ownProps,
    isPlaying: state.audioReducer.audio?.id === ownProps.audio.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(Song);
