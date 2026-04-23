//import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Route, Routes } from 'react-router-native';
import RepositoryList from './RepositoryList';
import TopBar from './AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e4e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appContainer: {
        width: 'auto',
        height: 'auto',
        maxHeight: 1500,
        flex: 1,
    }
});

const Main = () => {
    return (
        <View style={styles.appContainer}>
            <TopBar />
            <Routes>
                <Route path="/" element={
                    <View style={styles.container}>
                        <RepositoryList />
                    </View>
                } />
                <Route path="/signin" element={
                    <View>
                        <SignIn />
                    </View>
                } />
            </Routes>
        </View>
    )
};

export default Main;