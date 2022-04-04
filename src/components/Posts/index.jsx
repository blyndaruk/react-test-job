import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useFetching } from '../../hooks/useFetching';
import Post from '../Post';
import Loader from '../UI/Loader';
import { sleep } from '../../helpers';

const Posts = () => {
  const [posts, setPosts] = useState([])

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const postsData = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 20,
      },
    })
    await sleep(3000)
    setPosts([...postsData.data])

    // or via Promise
    // axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //   const newPosts = response.data
    //   setPosts([...posts, ...newPosts])
    // })
  })

  useEffect(() => {
    fetchPosts()
  }, [])


  function showPosts () {
    if (postsError) {
      return <h2>Posts fetching error</h2>
    } else if (isPostsLoading) {
      return <Loader width="120px" height="120px" />
    } else if (posts.length) {
      return posts.map((post) => <Post key={post.id} post={post} />)
    }
  }

  return (
    <div className="posts">
      <h2>Task 3 - Posts</h2>
      {showPosts()}
    </div>
  );
};

export default Posts;
