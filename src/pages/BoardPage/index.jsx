import * as S from "./style";

export default function BoardPage() {
  return (
    <S.BoardContainer>
      <S.Title>게시글 작성</S.Title>
      <S.BoardForm>
        <S.BoardBox>
          <S.TitleInput placeholder="제목을 입력하세요" />
          <S.Border />
          <S.ContentInput placeholder="본문을 입력하세요" />
        </S.BoardBox>
        <S.SubmitButton>POST</S.SubmitButton>
      </S.BoardForm>
    </S.BoardContainer>
  );
}
