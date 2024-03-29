import React from 'react';
import { connect } from 'react-redux';
import {
    View, Text, StyleSheet,
} from 'react-native';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { rootState } from '../models/reduxState';
import Colors from '../utils//Colors';
import { getAssetTitle } from '../utils/functions';

function TrackDetailsComponent({ audio }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.detailsWrapper}>
                <Text style={styles.title}>
                    {getAssetTitle(audio)}
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        paddingRight: 20,
    },
    detailsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5391E2',
        textAlign: 'center',
    },
    artist: {
        color: Colors.darkColor,
        fontSize: 12,
        marginTop: 4,
    },
    button: {
        opacity: 0.72,
    },
    moreButton: {
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
        opacity: 0.72,
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreButtonIcon: {
        height: 17,
        width: 17,
    },
});


const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, AnyAction>) => ({
});

const mapStateToProps = (state: rootState, ownProps: any) => ({
    ...ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetailsComponent);
