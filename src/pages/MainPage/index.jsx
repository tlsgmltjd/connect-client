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
      .then((response) => console.log(response));

    console.log(localStorage.getItem("Access-Token"));
  }, []);

  return (
    <S.Container>
      <Header />
      <S.BoardContainer>
        <S.BoardBox>
          <S.BoardHeader>
            <S.BoardTitle>오늘 타방한 썰 푼다.</S.BoardTitle>
            <S.BoardUserBox>
              <InfoUserIcon />
              <S.BoardUserName>이진헌</S.BoardUserName>
            </S.BoardUserBox>
          </S.BoardHeader>
          <S.BoardContent>
            요즘은 인공지능 기술이 더욱 발전하여 우리 일상 생활에 많은 영향을
            끼치고 있어요. 또한 환경 문제와 관련된 논의가 더욱 뜨거워지고 있죠.
            사람들은 더욱 친환경적인 삶을 살기 위해 노력하고 있어요. 그 외에도
            의료, 교육, 과학 기술 등 다양한 분야에서의 발전과 변화가 계속되고
            있어요. 어쩌면 우리는 미래에 무엇이 우리를 기다리고 있는지 상상할 수
            없을 정도로 놀라운 변화를 겪게 될지도 모르겠네요.
          </S.BoardContent>
          <S.BoardFooter>
            <S.BoardInfoBox>
              <S.BoardInfo>
                <HeartIcon />
                20
              </S.BoardInfo>
              <S.BoardInfo>
                <CommentIcon />
                20
              </S.BoardInfo>
            </S.BoardInfoBox>
            <InfoIcon />
          </S.BoardFooter>
        </S.BoardBox>
      </S.BoardContainer>
    </S.Container>
  );
}
