import { Link } from "react-router-dom";
import { BoardIcon } from "../../assets/BoardIcon";
import { ChatIcon } from "../../assets/ChatIcon";
import { HomeIcon } from "../../assets/HomeIcon";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { SearchIcon } from "../../assets/SearchIcon";
import * as S from "./style";

export default function Header() {
  return (
    <S.Container>
      <Link to="/">
        <S.LinkButton>
          <S.Title>CONNECT</S.Title>
        </S.LinkButton>
      </Link>
      <Link to="/">
        <S.LinkButton>
          <HomeIcon />
        </S.LinkButton>
      </Link>
      <Link to="/chat">
        <S.LinkButton>
          <ChatIcon />
        </S.LinkButton>
      </Link>
      <Link to="/profile">
        <S.LinkButton>
          <ProfileIcon />
        </S.LinkButton>
      </Link>
      <Link to="/boards">
        <S.LinkButton>
          <BoardIcon />
        </S.LinkButton>
      </Link>
      <Link to="/search">
        <S.LinkButton>
          <SearchIcon />
        </S.LinkButton>
      </Link>
    </S.Container>
  );
}
