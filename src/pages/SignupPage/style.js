import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f1e2b;
  height: 100vh;
  padding: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ErrorMessage = styled.span`
  color: #ec5353;
  font-size: 15px;
  margin-bottom: 10px;
  height: 15px;
`;

export const Form = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BirthForm = styled(Form)`
  height: 400px;
  justify-content: space-between;
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

export const BirthInputBox = styled(InputBox)`
  height: 100px;
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

export const BirthInput = styled(Input)`
  height: 80px;
  font-size: 25px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #5966e9;
  border: 30px;
  color: #1f1e2b;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  padding: 18px 80px 18px 80px;
  cursor: pointer;
  margin-top: 80px;
`;
