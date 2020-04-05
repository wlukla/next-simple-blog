import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f1f;
  color: #ffffff;
`;

export const Logo = styled.a`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: lightgreen;
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  color: darkgreen;
`;

export const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 15px;
  border: 1px solid black;
  border-top: none;
`;

export const Item = styled.li`
  margin: 10px;
  width: 50%;
`;

export const Card = styled.a`
  display: block;
  padding: 10px 30px;
  min-height: 30px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);
  font-weight: bold;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0 25px 15px;
`;

export const Article = styled.article`
  padding: 10px 20px 70px;
`;

export const ArticleTitle = styled.h2`
  margin: 15px 25px 0 0;
`;

export const ArticleBody = styled.p`
  margin-top: 40px;
  padding-left: 20px;
  border-left: 4px solid #1f1f1f;
`;

export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 50vh;
  font-size: 1rem;
  resize: none;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  width: 50%;
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  width: 150px;
  padding: 8px 40px;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  background-color: ${(props): string => (props.disabled ? 'grey' : 'lightgreen')};
  cursor: pointer;
  color: ${(props): string => (props.disabled ? 'black' : 'green')};
`;

export const Banner = styled.p`
  display: block;
  position: absolute;
  bottom: 0;
  right: 20px;
  padding: 10px 20px;
  background-color: lightgreen;
  color: green;
`;