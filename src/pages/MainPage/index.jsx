import { useEffect, useState } from "react";
import { CommentIcon } from "../../assets/CommentIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { InfoIcon } from "../../assets/InfoIcon";
import { InfoUserIcon } from "../../assets/InfoUserIcon";
import * as S from "./style";
import axios from "axios";

export default function MainPage() {
  const [boards, setBoards] = useState([]);

  const getBoards = async () =>
    await axios
      .get("http://localhost:8080/board", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      })
      .then((data) => setBoards(data.data))
      .catch((error) => console.error("Error fetching data:", error));

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <S.Container>
      <S.BoardContainer>
        {boards &&
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
