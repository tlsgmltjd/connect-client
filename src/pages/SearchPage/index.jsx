import * as S from "./style";
import Header from "../../components/Header";

export default function SearchPage() {
  return (
    <>
      <Header />
      <S.Container>
        <S.SearchContainer>
          <S.SearchInput />
          <S.UserContainer>
            <S.UserBox>
              <S.UserName>이진헌</S.UserName>
            </S.UserBox>
          </S.UserContainer>
        </S.SearchContainer>
      </S.Container>
    </>
  );
}
