import * as S from "./style";
import Header from "../../components/Header";
import { SearchIcon } from "../../assets/SearchIcon";
import { InfoUserIcon } from "../../assets/InfoUserIcon";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { InfoButton } from "../../assets/InfoButton";
import { useState } from "react";
import axios from "axios";
import { refresh } from "../../api/refresh";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  let debounceTimer;
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // 기존 타이머가 있다면 클리어
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // 500ms 후에 검색 요청
    debounceTimer = setTimeout(() => {
      axios
        .get(
          `https://port-0-connect-server-f02w2almh8gdgs.sel5.cloudtype.app/user?search=${value}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
            },
          }
        )
        .then((response) => setRes(response.data))
        .catch((error) => {
          if (error.response.status == 403) {
            refresh(navigate, null);
          }
        });
    }, 500);
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
