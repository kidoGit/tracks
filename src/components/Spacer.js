import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, marginValue }) => {
    return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
    spacer: {
        margin: 13
    }
});

export default Spacer;