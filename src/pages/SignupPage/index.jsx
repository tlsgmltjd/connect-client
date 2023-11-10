import { Route, Routes, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignupPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [birth, setBirth] = useState();
  const [explain, setExplain] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function signup() {
    axios
      .post("http://localhost:8080/api/auth/signup", {
        username: username,
        password: password,
        explain: explain,
        birth: birth,
      })
      .then(() => {
        toast.success("회원가입이 완료되었습니다.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        navigate("/signup/success");
      })
      .catch((error) => {
        toast.error("회원가입에 실패했습니다.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        navigate("/login");
      });
  }

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

                    if (username.length < 3) {
                      setError("이름은 3글자 이상으로 입력해주세요.");
                      return;
                    }

                    if (password.length < 6) {
                      setError("비밀번호는 6글자 이상으로 입력해주세요.");
                      return;
                    }

                    navigate("/signup/birth");
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
          <Route
            path="/birth"
            element={
              <>
                <S.BigForm
                  onSubmit={(e) => {
                    e.preventDefault();
                    // 생년월일 검증식 수정 필요
                    if (birth.length !== 8) {
                      setError("생년월일을 입력해주세요.");
                      return;
                    }

                    navigate("/signup/explain");
                  }}
                >
                  <S.ErrorMessage>{error && error}</S.ErrorMessage>
                  <S.InputContainer>
                    <S.BigInputBox>
                      <S.InputText>생년월일</S.InputText>
                      <S.BigInput
                        placeholder="20070301"
                        value={birth}
                        onChange={(e) => {
                          setError(null);
                          if (
                            e.target.value.length > 8 ||
                            isNaN(e.target.value)
                          )
                            return;
                          setBirth(e.target.value);
                        }}
                      />
                    </S.BigInputBox>
                  </S.InputContainer>
                  <S.SubmitButton>NEXT</S.SubmitButton>
                </S.BigForm>
              </>
            }
          />
          <Route
            path="/explain"
            element={
              <>
                <S.BigForm
                  onSubmit={(e) => {
                    e.preventDefault();
                    signup();
                  }}
                >
                  <S.ErrorMessage>{error && error}</S.ErrorMessage>
                  <S.InputContainer>
                    <S.BigInputBox>
                      <S.InputText>자기소개</S.InputText>
                      <S.Input
                        value={explain}
                        onChange={(e) => {
                          setError(null);
                          setExplain(e.target.value);
                        }}
                      />
                    </S.BigInputBox>
                  </S.InputContainer>
                  <S.SubmitButton>FINISH</S.SubmitButton>
                </S.BigForm>
              </>
            }
          />
        </Routes>
      </S.Wrapper>
    </S.Container>
  );
}
