// 업로드한 게시글을 최신순으로 받아와 보여줌
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IPost } from "../types/post-type";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import Post from "./Post";

const Container = styled.div``;

export default () => {
  // Page Login Process
  const [posts, setPosts] = useState<IPost[]>([]);

  // 서버에서 게시글 받아오기
  const fetchPosts = async () => {
    // 1. Firebase에 필요한 게시글 받아오기 쿼리(Query)
    const path = collection(firestore, "posts");
    const condition = orderBy("createdAt", "desc");
    const postsQuery = query(path, condition);
    // 2. 쿼리에 맞는 Doc'들' 가져오기(Firebase와 소통)
    const snapshot = await getDocs(postsQuery);
    // 3. 가져온 Doc들 Timeline에 쓸 수 있도록 가공(=형태)
    const timelinePosts = snapshot.docs.map((doc) => {
      // 3-1. doc 안에서 필요한 데이터를 뽑아온다.
      const { post, userId, nickname, createdAt } = doc.data() as IPost;
      // 3-2. 뽑아온 데이터를 반환한다.
      return {
        post,
        userId,
        nickname,
        createdAt,
        id: doc.id,
      };
    });
    // 4. 가공된 데이터를 State 저장
    setPosts(timelinePosts);
  };

  // 접속할 때마다, Timeline이 보여질 때마다
  useEffect(() => {
    // 서버(Firebase)에서 최신 게시글들 받아오기
    fetchPosts();
  }, []);

  // Page Design Rendering
  return (
    <Container>
      {posts.map((post) => {
        // Spread Operator
        return <Post {...post} />;
      })}
    </Container>
  );
};
