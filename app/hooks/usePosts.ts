import { useState, useEffect } from "react";
import { getPosts } from "../api/services/Posts";
import { useRouter } from "expo-router";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadPosts();
  }, [page]);

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const data = await getPosts({ endpoint: "posts", page });
      setPosts(page === 1 ? data : [...posts, ...data]);
      setIsLoading(false);
      setHasMore(data.length === 10);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshPosts = () => {
    setRefreshing(true);
    setPage(1);
    setRefreshing(false);
  };

  const loadMorePosts = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return {
    posts,
    refreshing,
    loadMorePosts,
    refreshPosts,
    isLoading,
    error,
    loadPosts,
    router,
  };
};
