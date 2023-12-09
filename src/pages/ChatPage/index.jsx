import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { refresh } from "../../api/refresh";
import { ChatIcon } from "../../assets/ChatIcon";
import { BackIcon } from "../../assets/BackIcon";
import { PlusIcon } from "../../assets/PlusIcon";
import { SearchIcon } from "../../assets/SearchIcon";
import { InfoButton } from "../../assets/InfoButton";
import axios from "axios";

export default function ChatPage() {
  const [roomList, setRoomList] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  let debounceTimer;

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isMobile ? (
        <>
          <S.ChatContainer>
            <Routes>
              <Route
                path="/"
                element={
                  <S.SideBar>
                    <S.SideBarListBox>
                      {roomList.map((room) => (
                        <S.SideBarListItem key={room.id}>
                          <Link to={"/chat/" + room.id}>
                            <S.UserInfoBox>
                              <ProfileIcon />
                              <S.UserName>
                                {room.toUser.username} 🔗{" "}
                                {room.fromUser.username}
                              </S.UserName>
                            </S.UserInfoBox>
                          </Link>
                        </S.SideBarListItem>
                      ))}
                    </S.SideBarListBox>
                  </S.SideBar>
                }
              />
              <Route
                path="/:id"
                element={
                  <>
                    <ChatInfoPage isMobile={isMobile} roomList={roomList} />
                  </>
                }
              />
            </Routes>
          </S.ChatContainer>
        </>
      ) : (
        <>
          <Header />
          <S.ChatContainer>
            <S.SideBar>
              <S.SideChatUserBox>
                <S.AddUserButtonBox>
                  <S.AddUserButton onClick={() => setIsModal((pre) => !pre)}>
                    <PlusIcon />
                  </S.AddUserButton>
                </S.AddUserButtonBox>
                {isModal == true && (
                  <S.ModalBackground>
                    <S.SearchContainer>
                      <S.SearchBox>
                        <S.SearchInput
                          value={search}
                          onChange={handleSearchChange}
                        />
                        <S.BackIcon onClick={() => setIsModal(false)}>
                          <BackIcon />
                        </S.BackIcon>
                      </S.SearchBox>
                      <S.UserContainer>
                        {res.map((user) => (
                          <S.UserBox key={user.id}>
                            <S.UserInfoBox>
                              <ProfileIcon />
                              <S.UserName>{user.username}</S.UserName>
                            </S.UserInfoBox>
                            <S.UserInfoButton
                              onClick={() => {
                                setIsModal(false);

                                axios
                                  .post(
                                    "http://localhost:8080/room",
                                    {
                                      fromUser: user.id,
                                    },
                                    {
                                      headers: {
                                        Authorization: `Bearer${localStorage.getItem(
                                          "Access-Token"
                                        )}`,
                                      },
                                    }
                                  )
                                  .then((data) => {
                                    navigate(`/chat/${data.data}`);
                                  })
                                  .catch((error) => {
                                    refresh(navigate, laodUserData);
                                  });
                              }}
                            >
                              <ChatIcon />
                            </S.UserInfoButton>
                          </S.UserBox>
                        ))}
                      </S.UserContainer>
                    </S.SearchContainer>
                  </S.ModalBackground>
                )}
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
              </S.SideChatUserBox>
            </S.SideBar>
            <Routes>
              <Route path="/:id" element={<ChatInfoPage />} />
            </Routes>
          </S.ChatContainer>
        </>
      )}
    </>
  );
}

function ChatInfoPage({ isMobile, roomList }) {
  const { id } = useParams();
  const [chatList, setChatList] = useState([]);
  const [currentUserId, setCurrentUserId] = useState();
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

    return () => {
      disconnect();
    };
  }, []);

  function laodChat() {
    fetch(
      "https://port-0-connect-server-f02w2almh8gdgs.sel5.cloudtype.app/chat/" +
        id,
      {
        headers: {
          Authorization: `Bearer  ${localStorage.getItem("Access-Token")}`,
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
  }

  useEffect(() => {
    laodChat();

    fetch(
      "https://port-0-connect-server-f02w2almh8gdgs.sel5.cloudtype.app/user/myself",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.id);
        setCurrentUserId(data.id);
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
            senderId: message.senderId,
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
      {isMobile && (
        <S.MobileChatHeader>
          <S.MobileBackIcon onClick={() => navigate("/chat")}>
            <BackIcon />
          </S.MobileBackIcon>
          <S.MobileChatName>
            {roomList[id - 1] && (
              <>
                {roomList[id - 1]?.toUser.username} 🔗{" "}
                {roomList[id - 1]?.fromUser.username}
              </>
            )}
          </S.MobileChatName>
        </S.MobileChatHeader>
      )}
      <S.ChatInfoContainer>
        <S.ChatBoxContainer ref={connectContainerRef}>
          {chatList.map((chat) => (
            <>
              <S.ChatBox key={chat.id} isMe={currentUserId == chat.senderId}>
                {chat.message}
              </S.ChatBox>
            </>
          ))}
        </S.ChatBoxContainer>
        <S.ChatForm
          onSubmit={(e) => {
            e.preventDefault();
            const msg = e.target.msg.value;
            sendChat(msg);
            e.target.msg.value = "";
          }}
        >
          <S.ChatInput name="msg" id="msg" required placeholder="Message..." />
          <S.ChatButton>
            <ChatIcon />
          </S.ChatButton>
        </S.ChatForm>
      </S.ChatInfoContainer>
    </>
  );
}
