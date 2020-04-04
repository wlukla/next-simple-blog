import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { NextPage } from 'next';
import { Dispatch } from 'redux';

import Layout from '../../components/Layout';
import { Title, Form, Label, Input, Textarea, SubmitButton, Banner } from '../../styled-components';

import PostModel from '../../models/PostModel';
import StateModel from '../../models/StateModel';

import { sendPost } from '../../redux/actions/createPostActions';

interface State {
  isSent: boolean;
  isLoading: boolean;
}

interface Props extends State {
  sendPost: (post: PostModel) => Promise<void>;
}

const CreatePost: NextPage<Props> = ({ sendPost, isSent, isLoading }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <Layout>
      <Title>CreatePost</Title>
      <Form
        onSubmit={(e): void => {
          e.preventDefault();
          const title = titleRef.current.value;
          const body = contentRef.current.value;
          contentRef.current.value = '';
          titleRef.current.value = '';
          sendPost({ title, body });
        }}
      >
        <Label htmlFor="title">
          Post title: <Input type="text" name="title" ref={titleRef} />
        </Label>

        <Label htmlFor="body">
          Contents:
          <Textarea name="body" ref={contentRef} />
        </Label>
        <SubmitButton type="submit" disabled={isLoading}>
          Post!
        </SubmitButton>
      </Form>
      {isSent && <Banner>Your Post was created!</Banner>}
    </Layout>
  );
};

const mapStateToProps = (state: StateModel): State => ({
  isSent: state.createPost.isSent,
  isLoading: state.createPost.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): { sendPost: (post: PostModel) => Promise<void> } => ({
  sendPost: sendPost(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
