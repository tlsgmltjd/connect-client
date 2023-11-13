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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BoardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
export const Title = styled.h1`
  color: white;
  font-size: 35px;
  text-shadow: 0 0 0px #fff, 0 0 0px #fff, 0 0 6px #fff;
  padding: 20px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  color: white;
  font-size: 32px;
  font-weight: 600;
`;

export const Border = styled.div`
  border: 2px solid #4a4a4a;
  width: 100%;
  border-radius: 30px;
  margin: 20px 0 20px 0;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  resize: none;
`;
export const SubmitButton = styled.button`
  border: none;
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  padding: 20px 150px 20px 150px;
  cursor: pointer;
  transition: 0.3s ease;
  border: 1px solid;

  &:hover {
    background-color: #1f1e2b;
    border: 1px solid white;
    color: white;
    transition: 0.3s ease;
  }
`;

export const CountTitle = styled.div`
  color: ${({ count }) => (count >= 500 ? "#EC5353" : "#626274")};
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const ErrorMessage = styled.span`
  color: #ec5353;
  font-size: 15px;
  margin-top: 10px;
  height: 15px;
`;
