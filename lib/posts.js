import axios from "axios";

export async function getAllPosts() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;
  return posts;
}

//ブログのidを取得
export async function getAllIds() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

//詳細ページのdataを取得
export async function getPostData(id) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/`
  );
  const post = res.data;
  return {
    post,
  };
}
