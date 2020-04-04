import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import Layout from '../../components/Layout';

const CreatePost: NextPage = () => {
  return (
    <Layout>
      <h1>CreatePost</h1>
      <Form>
        <Label htmlFor="title">
          Post title: <Input type="text" name="title" />
        </Label>

        <Label htmlFor="body">
          Contents:
          <Textarea name="body" />
        </Label>
      </Form>
      <Button type="submit">Post!</Button>
    </Layout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 50vh;
  font-size: 1rem;
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const Input = styled.input`
  width: 50%;
`;

const Button = styled.button`
  background-color: lightgreen;
  padding: 8px 40px;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  color: darkgreen;
  float: right;
`;

export default CreatePost;
