import * as S from "./style";

export default function LoginPage() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>CONNECT</S.Title>
        <S.SubTitle>Social Network Service</S.SubTitle>
        <S.Form>
          <S.InputBox>
            <S.InputText>이름</S.InputText>
            <S.Input />
          </S.InputBox>
          <S.InputBox>
            <S.InputText>비밀번호</S.InputText>
            <S.Input type="password" />
          </S.InputBox>
          <S.ButtonBox>
            <S.SubmitButton>CONNECT</S.SubmitButton>
          </S.ButtonBox>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}
