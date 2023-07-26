import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes, { InferProps } from 'prop-types';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Slider } from 'react-native-elements';
import { ColorVariables } from '../constants/colors';

function SeekbarComponent({
    onValueChange, value, duration,
}: InferProps<typeof SeekbarComponent.propTypes>) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { color: ColorVariables.secondarycolor, fontWeight: '900' }]}>
                    {getDurationAsString(value)}
                </Text>
                <View style={{ flex: 1 }} />
                <Text style={[styles.text, { width: 40, color: ColorVariables.secondarycolor, fontWeight: '900' }]}>
                    {getDurationAsString(duration)}
                </Text>
            </View>
            <Slider
                minimumValue={0}
                maximumValue={1}
                value={value / Math.max(1, duration)}
                minimumTrackTintColor={ColorVariables.tertiarycolor}
                maximumTrackTintColor={Colors.lightGrayColor}
                trackStyle={styles.track}
                thumbStyle={styles.thumb}
                onValueChange={onValueChange}
            />
        </View>
    );
}

export default SeekbarComponent

SeekbarComponent.propTypes = {
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    slider: {
        marginTop: -12,
    },
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        color: ColorVariables.primarycolor,
    },
    track: {
        height: 2,
        borderRadius: 1,
        color: ColorVariables.primarycolor,
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: ColorVariables.primarycolor,
        color: ColorVariables.primarycolor,
    },
    text: {
        color: ColorVariables.primarycolor,
        fontSize: 12,
        textAlign: 'center',
    },
});

const getDurationAsString = (duration: number) => {
    if (duration) {
        return new Date(duration).toISOString().substr(14, 5);
    }
    return '00:00';
};