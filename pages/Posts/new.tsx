import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import Layout from '../../components/Layout';

const CreatePost: NextPage = () => {
  return (
    <Layout>
      <Title>CreatePost</Title>
      <Form>
        <Label htmlFor="title">
          Post title: <Input type="text" name="title" />
        </Label>

        <Label htmlFor="body">
          Contents:
          <Textarea name="body" />
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

export default CreatePost;
