const BASE_URL = "https://jsonplaceholder.typicode.com";

interface IGetPostsQuery {
  endpoint: string;
  page: number;
}

export const getPosts = async ({ endpoint, page = 1 }: IGetPostsQuery) => {
  const response = await fetch(
    `${BASE_URL}/${endpoint}?_page=${page}&_per_page=10`
  );
  const data = await response.json();
  return data;
};
