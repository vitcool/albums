import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
    return (
        <View style={styles.containerStyle}>{children}</View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        borderWidth: 1,
        position: 'relative',
        flexDirection: 'row'
    }
};

export default CardSection;
