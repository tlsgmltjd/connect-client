import { BoardIcon } from "../../assets/BoardIcon";
import { ChatIcon } from "../../assets/ChatIcon";
import { HomeIcon } from "../../assets/HomeIcon";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { SearchIcon } from "../../assets/SearchIcon";
import * as S from "./style";

export default function Header() {
  return (
    <S.Container>
      <S.Title>CONNECT</S.Title>
      <HomeIcon />
      <ChatIcon />
      <ProfileIcon />
      <BoardIcon />
      <SearchIcon />
    </S.Container>
  );
}
