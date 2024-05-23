import React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { usePosts } from "../hooks/usePosts";
import { Post } from "../types/interfaces";
import PostCard from "../components/PostCard/PostCard";
import { top } from "../utils/constants";
import NotFound from "../components/NotFound/NotFound";

const initialNumToRender = 10;

const PostsPage = () => {
  const {
    posts,
    refreshing,
    loadMorePosts,
    refreshPosts,
    isLoading,
    error,
    loadPosts,
    router,
  } = usePosts();

  const onPostPress = (item: Post) => {
    router.push({
      pathname: `/${item}`,
      params: {
        ...item,
      },
    });
  };

  const onTryAgainPress = () => loadPosts();

  const renderItem = ({ item }: { item: Post }) => (
    <PostCard item={item} onPress={() => onPostPress(item)} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {error && <NotFound tryAgainPress={onTryAgainPress} />}
      {isLoading && posts.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          contentContainerStyle={{
            top: top,
            paddingBottom: top / 0.7,
            marginHorizontal: 20,
            marginTop: 5,
          }}
          data={posts}
          renderItem={renderItem}
          initialNumToRender={initialNumToRender}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.3}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refreshPosts} />
          }
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() =>
            isLoading && posts.length > 0 ? (
              <ActivityIndicator size={"small"} />
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
};

export default PostsPage;
