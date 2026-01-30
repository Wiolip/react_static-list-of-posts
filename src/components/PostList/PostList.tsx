import React from 'react';
import { PostInfo } from '../PostInfo';
import { type Post } from '../../types/Post';
import './PostList.css';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
