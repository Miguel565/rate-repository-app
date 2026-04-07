import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#ffff',
        width: 'auto',
        padding: 15,
        paddingRight: 20,
        display: 'flex',
    },
    text: {
        flexDirection: 'column',
        gap: 5,
    },
    avatarContainer: {
        flexGrow: 0,
        paddingRight: 15,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 3
    },
    description: {
        flexDirection: 'row',
        flexGrow: 1,
        padding: 5,
    },
    items: {
        flexDirection: 'column',
        flexGrow: 2,
        gap: 12,
    },
    metrict: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 2,
        margin: 2,
    },
    metrictItem: {
        flexDirection: 'column',
        paddong: 2,
        alignContent: 'center',
    },
    data: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    dataText: {
        textAlign: 'center',
        fontWeight: 'light',
        color: '#525252'
    },
    names: {
        fontWeight: 'bold',
    },
    descriptionItem: {
        fontWeight: 'light',
        color: '#525252'
    },
    lenguage: {
        textAlign: 'center',
        backgroundColor: '#0060E0',
        padding: 5,
        margin: 2,
        borderRadius: 3,
        color: '#ffffff',
        maxWidth: 80,
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.items}>
                <View style={styles.description}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={item.ownerAvatarUrl} />
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.names}>
                            {item.fullName}
                        </Text>
                        <Text style={styles.descriptionItem}>
                            {item.description}
                        </Text>
                        <Text style={styles.lenguage}>
                            {item.language}
                        </Text>
                    </View>
                </View>
                <View style={styles.metrict}>
                    <View style={styles.metrictItem}>
                        <Text style={styles.data}>
                            {item.stargazersCount}
                        </Text>
                        <Text style={styles.dataText}>Stars</Text>
                    </View>
                    <View style={styles.metrictItem}>
                        <Text style={styles.data}>
                            {item.forksCount}
                        </Text>
                        <Text style={styles.dataText}>Forks</Text>
                    </View>
                    <View style={styles.metrictItem}>
                        <Text style={styles.data}>
                            {item.reviewCount}
                        </Text>
                        <Text style={styles.dataText}>Reviews</Text>
                    </View>
                    <View style={styles.metrictItem}>
                        <Text style={styles.data}>
                            {item.ratingAverage}
                        </Text>
                        <Text style={styles.dataText}>Rating</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;