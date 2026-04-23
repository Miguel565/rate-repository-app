//import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

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
    },
    scrollView: {
        flexDirection: 'row',

    }
});

const TopBar = () => {

    return (
        <View style={styles.topContainer}>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
                <Pressable >
                    <Link to='/' >
                        <Text style={styles.label}>Repositories</Text>
                    </Link>
                </Pressable>
                <Pressable>
                    <Link to='/signin'>
                        <Text style={styles.label}>Signin</Text>
                    </Link>
                </Pressable>
            </ScrollView>
        </View>
    );
};

export default TopBar;