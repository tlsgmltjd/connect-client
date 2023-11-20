import * as S from "./style";
import Header from "../../components/Header";
import { SearchIcon } from "../../assets/SearchIcon";
import { InfoUserIcon } from "../../assets/InfoUserIcon";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { InfoButton } from "../../assets/InfoButton";
import { useState } from "react";
import axios from "axios";
import _ from "lodash";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const debouncedSearch = _.debounce((value) => {
    axios
      .get(`http://localhost:8080/user?search=${value}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      })
      .then((response) => setRes(response.data));
  }, 500); // 500ms 디바운스 설정

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.SearchContainer>
          <S.SearchBox>
            <S.SearchInput value={search} onChange={handleSearchChange} />
            <S.SearchIcon>
              <SearchIcon />
            </S.SearchIcon>
          </S.SearchBox>
          <S.UserContainer>
            {res.map((user) => (
              <S.UserBox key={user.id}>
                <S.UserInfoBox>
                  <ProfileIcon />
                  <S.UserName>{user.username}</S.UserName>
                </S.UserInfoBox>
                <InfoButton />
              </S.UserBox>
            ))}
          </S.UserContainer>
        </S.SearchContainer>
      </S.Container>
    </>
  );
}
