import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { rootState } from '../models/reduxState';
import Colors from '../utils/constants/Colors';
import { ColorVariables } from '../constants/colors';

function Player({
    handlePreviousTrack, handleNextTrack, handlePlayPause, isPlaying
}: InferProps<typeof Player.propTypes>) {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.0} onPress={() => console.log('shuffle')}>
            </TouchableOpacity>
            <View style={{ width: 40 }} />
            <TouchableOpacity onPress={handlePreviousTrack}>
                <FontAwesome name="arrow-left" color={Colors.darkColor} size={24} />
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={handlePlayPause}>
                <View style={styles.playButton}>
                    <FontAwesome name={isPlaying ? 'pause' : 'play'} color={ColorVariables.primarycolor} size={24} />
                </View>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={handleNextTrack}>
                <FontAwesome name="arrow-right" color={Colors.darkColor} size={24} />
            </TouchableOpacity>
            <View style={{ width: 40 }} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
    },
    playButton: {
        height: 72,
        width: 72,
        borderWidth: 1,
        borderColor: ColorVariables.primarycolor,
        borderRadius: 72 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    secondaryControl: {
        height: 18,
        width: 18,
    },
    off: {
        opacity: 0.30,
    },
    shuffleBadge: {
        position: 'absolute',
        top: -8,
        right: 9,
    },
    repeatBadge: {
        position: 'absolute',
        top: -8,
        right: 6,
    },
});

Player.propTypes = {
    handlePreviousTrack: PropTypes.func.isRequired,
    handleNextTrack: PropTypes.func.isRequired,
    handlePlayPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, AnyAction>) => ({
});

const mapStateToProps = (state: rootState, ownProps: InferProps<typeof Player.propTypes>) => ({
    ...ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
