import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { Post } from "../types/interfaces";
import PostCard from "../components/PostCard/PostCard";
import { top } from "../utils/constants";
import NotFound from "../components/NotFound/NotFound";
import { useRouter } from "expo-router";
import { useLazyGetPostsQuery } from "../state/api";

const initialNumToRender = 10;

const PostsPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [triggerGetPosts, { isLoading, isFetching, isError }] =
    useLazyGetPostsQuery();
  const [refreshing, setRefreshing] = useState(false);
  const [totalPosts, setTotalPosts] = useState<number>();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = useCallback(async () => {
    if (totalPosts === 0) return;
    try {
      const postsResult = await triggerGetPosts(page).unwrap();
      setPosts((posts) => [...posts, ...postsResult]);
      setTotalPosts(postsResult.length);
      setPage((page) => page + 1);
      setRefreshing(false);
    } catch (err) {
      console.error(err);
    }
  }, [isFetching, page]);

  const onRefresh = () => {
    setRefreshing(true);
    loadPosts();
  };

  const onPostPress = (item: Post) => {
    router.push({
      pathname: `/${item.id}`,
      params: {
        ...item,
      },
    });
  };

  const refetchPosts = useCallback(() => {
    setPage(0);
    setPosts([]);
    loadPosts();
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <PostCard item={item} onPress={() => onPostPress(item)} />
  );

  const listFooterComponent = () =>
    isFetching && <ActivityIndicator size={"small"} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isError && <NotFound tryAgainPress={refetchPosts} />}
      {isLoading ? (
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
          keyExtractor={(item, index) => "item" + item.id + "index" + index}
          onEndReached={loadPosts}
          onEndReachedThreshold={0.3}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={listFooterComponent}
        />
      )}
    </SafeAreaView>
  );
};

export default PostsPage;
