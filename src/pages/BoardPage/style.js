import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoardBox = styled.article`
  width: 700px;
  height: 500px;
  border-radius: 30px;
  background: #17161f;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;
export const Title = styled.h1``;
export const TitleInput = styled.input``;
export const ContentInput = styled.input``;
export const SubmitButton = styled.button``;
