import * as S from "./style";
import Header from "../../components/Header";
import { SearchIcon } from "../../assets/SearchIcon";
import { InfoUserIcon } from "../../assets/InfoUserIcon";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { InfoButton } from "../../assets/InfoButton";

export default function SearchPage() {
  return (
    <>
      <Header />
      <S.Container>
        <S.SearchContainer>
          <S.SearchBox>
            <S.SearchInput />
            <S.SearchIcon>
              <SearchIcon />
            </S.SearchIcon>
          </S.SearchBox>
          <S.UserContainer>
            <S.UserBox>
              <S.UserInfoBox>
                <ProfileIcon />
                <S.UserName>이진헌</S.UserName>
              </S.UserInfoBox>
              <InfoButton />
            </S.UserBox>
          </S.UserContainer>
        </S.SearchContainer>
      </S.Container>
    </>
  );
}
