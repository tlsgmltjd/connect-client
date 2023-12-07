import { useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";

export default function ChatPage() {
  const [roomList, setRoomList] = useState([
    {
      id: 10,
      toUser: {
        id: 10,
        username: "이진헌",
      },
      fromUser: {
        id: 11,
        username: "김주은",
      },
    },
  ]);

  return (
    <>
      <Header />
      <S.ChatContainer>
        <S.SideBar>
          <S.SideBarListBox>
            {roomList.map((room) => (
              <S.SideBarListItem key={room.id}>
                {room.fromUser.username}
              </S.SideBarListItem>
            ))}
          </S.SideBarListBox>
        </S.SideBar>
      </S.ChatContainer>
    </>
  );
}
