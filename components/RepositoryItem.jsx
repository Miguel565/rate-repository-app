import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: '#0000'
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.text}>
            <Text>
                Full name: {item.fullName}
            </Text>
            <Text>
                Description: {item.description}
            </Text>
            <Text>
                Language: {item.language}
            </Text>
            <Text>
                Forks: {item.forksCount}
            </Text>
            <Text>
                Stars: {item.stargazersCount}
            </Text>
            <Text>
                Rating: {item.ratingAverage}
            </Text>
            <Text>
                {item.ownerAvatarUrl}
            </Text>
            <Text>
                Reviews: {item.reviewCount}
            </Text>
        </View>
    );
};

export default RepositoryItem;