//import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    topContainer: {
        display: 'flex',
        backgroundColor: '#24292e',
        alignItems: 'flex-start',
        verticalAlign: 'bottom',
        padding: 10,
        paddingTop: 60,
        height: 111,
        width: 'auto',
        maxWidth: 'auto',
        minWidth: 300
    },
    label: {
        fontSize: 24,
        padding: 5,
        fontFamily: 'Arial, Solid',
        color: '#ffff',
    }
});

const TopBar = () => {

    const ratePress = () => {
        console.log('Repositorios');
    }

    return (
        <View style={styles.topContainer}>
            <TouchableWithoutFeedback onPress={ratePress}>
                <Text style={styles.label}>Repositories</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default TopBar;