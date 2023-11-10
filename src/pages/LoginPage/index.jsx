import * as S from "./style";

export default function LoginPage() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleBox>
          <S.Title>CONNECT</S.Title>
          <S.SubTitle>Social Network Service</S.SubTitle>
        </S.TitleBox>
        <S.Form>
          <S.InputContainer>
            <S.InputBox>
              <S.InputText>이름</S.InputText>
              <S.Input />
            </S.InputBox>
            <S.InputBox>
              <S.InputText>비밀번호</S.InputText>
              <S.Input type="password" />
            </S.InputBox>
          </S.InputContainer>
          <S.SubmitButton>CONNECT</S.SubmitButton>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}
