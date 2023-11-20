import { useEffect, useState } from "react";
import { CommentIcon } from "../../assets/CommentIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { InfoIcon } from "../../assets/InfoIcon";
import { InfoUserIcon } from "../../assets/InfoUserIcon";
import * as S from "./style";
import axios from "axios";
import { toast } from "react-toastify";
import { refresh } from "../../api/refresh";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  const getBoards = async () =>
    await axios
      .get("http://localhost:8080/board", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      })
      .then((data) => {
        setBoards(data.data);
      })
      .catch((error) => {
        refresh(navigate, getBoards);
      });

  const like = async (board) =>
    await axios
      .post(
        "http://localhost:8080/board/like",
        { boardId: board.boardId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
          },
        }
      )
      .then((data) => {
        toast.success(data.data.msg, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setBoards((prevData) =>
          prevData.map((preBoard) =>
            preBoard.boardId === board.boardId
              ? data.data.msg == "좋아요 등록이 완료되었습니다."
                ? { ...preBoard, likeCount: preBoard.likeCount + 1 }
                : { ...preBoard, likeCount: preBoard.likeCount - 1 }
              : preBoard
          )
        );
      })
      .catch((error) => {
        refresh(navigate, like);
        return;
      });

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <>
      <Header />
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
                    <S.BoardInfo
                      onClick={() => {
                        like(board);
                      }}
                    >
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
    </>
  );
}
