import React, { useRef } from 'react';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import { sendPost } from '../../redux/actions/createPostActions';
import PostModel from '../../models/PostModel';

interface Props {
  sendPost: (post: PostModel) => Promise<void>;
}

const CreatePost: NextPage<Props> = ({ sendPost }) => {
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
        <Button type="submit">Post!</Button>
      </Form>
    </Layout>
  );
};

const Title = styled.h2`
  margin: 15px 25px;
`;

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 50vh;
  font-size: 1rem;
  resize: none;
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 50%;
`;

const Button = styled.button`
  align-self: flex-end;
  width: 150px;
  padding: 8px 40px;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  color: darkgreen;
  cursor: pointer;
  background-color: lightgreen;
`;

const mapDispatchToProps = (dispatch: Dispatch): { sendPost: (post: PostModel) => Promise<void> } => ({
  sendPost: sendPost(dispatch),
});

export default connect(null, mapDispatchToProps)(CreatePost);
