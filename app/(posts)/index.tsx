import { SafeAreaView, StyleSheet, Text } from "react-native";

const PostsPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Posts Page</Text>
    </SafeAreaView>
  );
};

export default PostsPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    flex: 1,
  },
});
