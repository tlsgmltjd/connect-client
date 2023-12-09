import { useEffect, useState } from "react";
import { UserIcon } from "../../assets/UserIcon";
import Header from "../../components/Header";
import * as S from "./style";
import axios from "axios";
import { refresh } from "../../api/refresh";
import { useNavigate } from "react-router-dom";

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
                  followers
                </S.ProfileFollowItem>
              </S.ProfileFollowBox>
            </>
          </S.ProfileBox>
        </S.ProfileContainer>
      )}
    </S.Container>
  );
}
