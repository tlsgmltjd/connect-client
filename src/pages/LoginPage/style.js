import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f1e2b;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 4rem;
  text-shadow: 0 0 0px #fff, 0 0 0px #fff, 0 0 10px #fff;
`;

export const SubTitle = styled.h1`
  color: #626274;
  font-size: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const InputBox = styled.div`
  position: relative;
  border-radius: 10px;
  height: 80px;
  background-color: #17161f;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const InputText = styled.span`
  color: #4a4a4a;
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const Input = styled.input`
  background-color: #17161f;
  height: 60px;
  border-radius: 10px;
  width: 300px;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  padding: 15px;
`;

export const ButtonBox = styled.div``;

export const SubmitButton = styled.button`
  background-color: #5966e9;
  border: 30px;
  color: #1f1e2b;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  padding: 18px 70px 18px 70px;
  cursor: pointer;
  align-items: flex-end;
`;
