//import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import TopBar from './AppBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingEnd: 20
    },
});

const Main = () => {
    return (
        <View>
            <TopBar />
            <View style={styles.container}>
                <RepositoryList />
            </View>
        </View>
    )
};

export default Main;