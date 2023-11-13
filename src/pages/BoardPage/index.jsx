import * as S from "./style";

export default function BoardPage() {
  return (
    <S.BoardContainer>
      <S.Title>게시글 작성</S.Title>
      <S.BoardForm>
        <S.BoardBox>
          <S.TitleInput />
          <S.ContentInput />
        </S.BoardBox>
        <S.SubmitButton>POST</S.SubmitButton>
      </S.BoardForm>
    </S.BoardContainer>
  );
}
