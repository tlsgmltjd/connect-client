import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { refresh } from "../../api/refresh";

export default function ChatPage() {
  const [roomList, setRoomList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://port-0-connect-server-f02w2almh8gdgs.sel5.cloudtype.app/room",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setRoomList(data);
      })
      .catch((error) => {
        if (error.response.status == 403) {
          refresh(navigate, null);
        }
      });
  }, []);

  return (
    <>
      <Header />
      <S.ChatContainer>
        <S.SideBar>
          <S.SideBarListBox>
            {roomList.map((room) => (
              <S.SideBarListItem key={room.id}>
                <Link to={"/chat/" + room.id}>
                  <S.UserInfoBox>
                    <ProfileIcon />
                    <S.UserName>
                      {room.toUser.username} 🔗 {room.fromUser.username}
                    </S.UserName>
                  </S.UserInfoBox>
                </Link>
              </S.SideBarListItem>
            ))}
          </S.SideBarListBox>
        </S.SideBar>
        <Routes>
          <Route path="/:id" element={<ChatInfoPage />} />
        </Routes>
      </S.ChatContainer>
    </>
  );
}

function ChatInfoPage() {
  const { id } = useParams();
  const [chatList, setChatList] = useState([]);
  const navigate = useNavigate();

  const client = useRef({});

  const connectContainerRef = useRef(null);
  const [fristScroll, setFirstScroll] = useState(true);

  const scrollInit = () => {
    if (!connectContainerRef.current) return;

    connectContainerRef.current.scrollTop =
      connectContainerRef.current.scrollHeight;
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    scrollInit();
    if (fristScroll) {
      scrollInit();
      setFirstScroll(false);
    } else {
      if (!connectContainerRef.current) return;

      const isScrolledToBottom =
        connectContainerRef.current.scrollHeight -
          connectContainerRef.current.clientHeight <=
        connectContainerRef.current.scrollTop + 500; // 작은 오차를 허용

      if (!isScrolledToBottom) {
        return;
      }
      scrollInit();
    }
  }, [chatList]);

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  useEffect(() => {
    fetch(
      "https://port-0-connect-server-f02w2almh8gdgs.sel5.cloudtype.app/chat/" +
        id,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setChatList(data);
      })
      .catch((error) => {
        if (error.response.status == 403) {
          refresh(navigate, null);
        }
      });
  }, []);

  function connect() {
    let socket = new SockJS(
      "https://port-0-connect-server-f02w2almh8gdgs.sel5.cloudtype.app/ws-stomp"
    );
    client.current = Stomp.over(socket);

    client.current.connect({}, function (frame) {
      console.log("Connected: " + frame);

      client.current.subscribe("/room/" + id, function (chatMessage) {
        const message = JSON.parse(chatMessage.body);
        console.log(message);
        setChatList((prev) => [
          ...prev,
          {
            id: message.chatId,
            message: message.message,
            sendDate: message.sendDate,
            sender: message.sender,
          },
        ]);
      });
    });
  }

  function sendChat(msg) {
    client.current.send(
      "/send/" + id,
      {},
      JSON.stringify({
        message: msg,
        token: `Bearer${localStorage.getItem("Access-Token")}`,
      })
    );
  }

  return (
    <>
      <S.ChatInfoContainer>
        <S.ChatBoxContainer ref={connectContainerRef}>
          {chatList.map((chat) => (
            <S.ChatBox key={chat.id} isMe={chat.isMe}>
              {chat.message}
              {chat.isMe == null && <S.ChatName>{chat.sender}</S.ChatName>}
            </S.ChatBox>
          ))}
        </S.ChatBoxContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const msg = e.target.msg.value;
            sendChat(msg);
            e.target.msg.value = "";
          }}
        >
          <input name="msg" id="msg" />
          <button type="submit">채팅 보내기</button>
        </form>
      </S.ChatInfoContainer>
    </>
  );
}
