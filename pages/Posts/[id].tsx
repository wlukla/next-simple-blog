import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';

import Layout from '../../components/Layout';

interface Props {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const Post: NextPage<Props> = ({ post }: Props) => {
  return (
    <Layout>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Layout>
  );
};

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);

  return { post: data };
};

export default Post;
