import { useEffect, useState } from "react";
import { CommentIcon } from "../../assets/CommentIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { InfoIcon } from "../../assets/InfoIcon";
import { InfoUserIcon } from "../../assets/InfoUserIcon";
import Header from "../../components/Header";
import * as S from "./style";
import axios from "axios";

export default function MainPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/board", {
        headers: {
          Authorization: localStorage.getItem("Access-Token"),
        },
        withCredentials: true,
      })
      .then((response) => setBoards(response.data));
  }, []);

  return (
    <S.Container>
      <Header />
      <S.BoardContainer>
        {boards ??
          boards.map((board) => (
            <S.BoardBox key={board.boardId}>
              <S.BoardHeader>
                <S.BoardTitle>{board.title}</S.BoardTitle>
                <S.BoardUserBox>
                  <InfoUserIcon />
                  <S.BoardUserName>{board.author.username}</S.BoardUserName>
                </S.BoardUserBox>
              </S.BoardHeader>
              <S.BoardContent>{board.content}</S.BoardContent>
              <S.BoardFooter>
                <S.BoardInfoBox>
                  <S.BoardInfo>
                    <HeartIcon />
                    {board.likeCount}
                  </S.BoardInfo>
                  <S.BoardInfo>
                    <CommentIcon />
                    {board.commentCount}
                  </S.BoardInfo>
                </S.BoardInfoBox>
                <InfoIcon />
              </S.BoardFooter>
            </S.BoardBox>
          ))}
      </S.BoardContainer>
    </S.Container>
  );
}
