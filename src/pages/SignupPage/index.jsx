import { Route, Routes } from "react-router-dom";
import * as S from "./style";
import { useState } from "react";

export default function SignupPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>CONNECT</S.Title>
          <S.SubTitle>Social Network Service</S.SubTitle>
        </S.TitleBox>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <S.Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (password !== checkPassword) {
                      setError(
                        "비밀번호 확인란에 동일한 비밀번호를 입력해주세요."
                      );
                      return;
                    }
                  }}
                >
                  <S.ErrorMessage>{error && error}</S.ErrorMessage>
                  <S.InputContainer>
                    <S.InputBox>
                      <S.InputText>이름</S.InputText>
                      <S.Input
                        value={username}
                        onChange={(e) => {
                          setError(null);
                          setUserName(e.target.value);
                        }}
                      />
                    </S.InputBox>
                    <S.InputBox>
                      <S.InputText>비밀번호</S.InputText>
                      <S.Input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setError(null);
                          setPassword(e.target.value);
                        }}
                      />
                    </S.InputBox>
                    <S.InputBox>
                      <S.InputText>비밀번호 확인</S.InputText>
                      <S.Input
                        type="password"
                        value={checkPassword}
                        onChange={(e) => {
                          setError(null);
                          setCheckPassword(e.target.value);
                        }}
                      />
                    </S.InputBox>
                  </S.InputContainer>
                  <S.SubmitButton>NEXT</S.SubmitButton>
                </S.Form>
              </>
            }
          />
        </Routes>
      </S.Wrapper>
    </S.Container>
  );
}
