import { useEffect, useState } from "react";
import { UserIcon } from "../../assets/UserIcon";
import Header from "../../components/Header";
import * as S from "./style";
import axios from "axios";
import { refresh } from "../../api/refresh";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AddUserIcon } from "../../assets/AddUserIcon";
import { DeleteUserIcon } from "../../assets/DeleteUserIcon";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const laodUserData = async () => {
    await axios
      .get("http://localhost:8080/user/myself", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      })
      .then((data) => {
        setUserData(data.data);
      })
      .catch((error) => {
        refresh(navigate, laodUserData);
      });
  };
  useEffect(() => {
    laodUserData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <S.Container>
            <Header />
            {userData && (
              <S.ProfileContainer>
                <S.ProfileBox>
                  <UserIcon />
                  <>
                    <S.ProfileName>{userData.username}</S.ProfileName>
                    <S.ProfileFollowBox>
                      <S.ProfileFollowItem>
                        <S.ProfileFollowBold>
                          {userData.followers}{" "}
                        </S.ProfileFollowBold>
                        followers
                      </S.ProfileFollowItem>
                      <S.ProfileFollowItem>
                        <S.ProfileFollowBold>
                          {userData.following}{" "}
                        </S.ProfileFollowBold>{" "}
                        following
                      </S.ProfileFollowItem>
                    </S.ProfileFollowBox>
                  </>
                </S.ProfileBox>
              </S.ProfileContainer>
            )}
          </S.Container>
        }
      />
      <Route path="/:userId" element={<OtherUserInfo />} />
    </Routes>
  );
}

function OtherUserInfo() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const { userId } = useParams();

  const laodUserData = async () => {
    await axios
      .get("http://localhost:8080/user/" + userId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
        },
      })
      .then((data) => {
        setUserData(data.data);
      })
      .catch((error) => {
        refresh(navigate, laodUserData);
      });
  };
  useEffect(() => {
    laodUserData();
  }, []);

  return (
    <S.OtherProfileContainer>
      <Header />
      {userData && (
        <S.ProfileContainer>
          <S.ProfileBox>
            <UserIcon />
            <>
              <S.ProfileName>{userData.username}</S.ProfileName>
              <S.ProfileFollowBox>
                <S.ProfileFollowItem>
                  <S.ProfileFollowBold>
                    {userData.followers}{" "}
                  </S.ProfileFollowBold>
                  followers
                </S.ProfileFollowItem>
                <S.ProfileFollowItem>
                  <S.ProfileFollowBold>
                    {userData.following}{" "}
                  </S.ProfileFollowBold>{" "}
                  following
                </S.ProfileFollowItem>
              </S.ProfileFollowBox>
            </>
          </S.ProfileBox>
          {!userData.isFollowed ? (
            <S.FollowButton
              isFollowed={userData.isFollowed}
              onClick={() => {
                axios
                  .post(
                    "http://localhost:8080/follow",
                    {
                      userId: userData.id,
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
                    setUserData((pre) => {
                      return {
                        ...pre,
                        followers: pre.followers + 1,
                        isFollowed: true,
                      };
                    });
                  })
                  .catch((error) => {
                    refresh(navigate, laodUserData);
                  });
              }}
            >
              <AddUserIcon />
              FOLLOW
            </S.FollowButton>
          ) : (
            <S.FollowButton
              isFollowed={userData.isFollowed}
              onClick={() => {
                fetch("http://localhost:8080/follow", {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                      "Access-Token"
                    )}`,
                  },
                  body: JSON.stringify({
                    userId: userData.id,
                  }),
                })
                  .then((data) => {
                    setUserData((pre) => {
                      return {
                        ...pre,
                        followers: pre.followers - 1,
                        isFollowed: false,
                      };
                    });
                  })
                  .catch((error) => {
                    refresh(navigate, laodUserData);
                  });
              }}
            >
              <DeleteUserIcon />
              UNFOLLOW
            </S.FollowButton>
          )}
        </S.ProfileContainer>
      )}
    </S.OtherProfileContainer>
  );
}
