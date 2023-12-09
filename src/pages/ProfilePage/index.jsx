import { useEffect, useState } from "react";
import { UserIcon } from "../../assets/UserIcon";
import Header from "../../components/Header";
import * as S from "./style";
import axios from "axios";
import { refresh } from "../../api/refresh";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

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
        console.log(data.data);
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
  );
}
