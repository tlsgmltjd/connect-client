import { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function BoardPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function board() {
    axios
      .post(
        "http://localhost:8080/board",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Access-Token")}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        toast.success(response.data.msg, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        navigate("/");
      })
      .catch((error) =>
        toast.error(error.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      );
    setTitle("");
    setContent("");
  }

  return (
    <S.BoardContainer>
      <S.Title>게시글 작성</S.Title>
      <S.BoardForm
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length < 3 || content.length < 3) {
            setError("3글자 이상으로 입력해주세요.");
            return;
          }
          if (content.length > 500) {
            setError("너무 길어요.");
            return;
          }

          board();
        }}
      >
        <S.BoardBox>
          <S.TitleInput
            value={title}
            onChange={(e) => {
              if (!(e.target.value.length > 20)) setTitle(e.target.value);
            }}
            placeholder="제목을 입력하세요"
            required
          />
          <S.Border />
          <S.ContentInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="본문을 입력하세요"
            required
          />
          <S.CountTitle count={content.length}>
            {content.length + " / 500"}
          </S.CountTitle>
        </S.BoardBox>
        <S.SubmitButton>POST</S.SubmitButton>
      </S.BoardForm>
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.BoardContainer>
  );
}
