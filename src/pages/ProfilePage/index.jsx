import { UserIcon } from "../../assets/UserIcon";
import Header from "../../components/Header";
import * as S from "./style";

export default function ProfilePage() {
  return (
    <S.Container>
      <Header />
      <S.ProfileContainer>
        <S.ProfileBox>
          <UserIcon />
          <S.ProfileName>신희성</S.ProfileName>
          <S.ProfileFollowBox>
            <S.ProfileFollowItem>20 followers</S.ProfileFollowItem>
            <S.ProfileFollowItem>20 followers</S.ProfileFollowItem>
          </S.ProfileFollowBox>
        </S.ProfileBox>
      </S.ProfileContainer>
    </S.Container>
  );
}
