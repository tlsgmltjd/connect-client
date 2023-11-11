import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const navigate = useNavigate();

  function login() {
    axios
      .post("http://localhost:8080/api/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("Access-Token", response.headers.authorization);
        localStorage.setItem(
          "Refresh-Token",
          response.headers["refresh-token"]
        );
        navigate("/");
      })
      .catch((error) => setError(error.response.data.message));
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>CONNECT</S.Title>
          <S.SubTitle>Social Network Service</S.SubTitle>
        </S.TitleBox>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <S.ErrorMessage>{error && error}</S.ErrorMessage>
          <S.InputContainer>
            <S.InputBox>
              <S.InputText>이름</S.InputText>
              <S.Input
                required
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
                required
                type="password"
                value={password}
                onChange={(e) => {
                  setError(null);
                  setPassword(e.target.value);
                }}
              />
            </S.InputBox>
          </S.InputContainer>
          <Link to="/signup">
            <S.LinkBox>회원가입</S.LinkBox>
          </Link>
          <S.SubmitButton>CONNECT</S.SubmitButton>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}
