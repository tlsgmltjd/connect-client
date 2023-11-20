import axios from "axios";
import { toast } from "react-toastify";

export const refresh = async (navigate, callBack) => {
  await axios
    .get(
      "https://port-0-connect-server-f02w2almh8gdgs.sel5.cloudtype.app/refresh",
      {
        headers: {
          "Refresh-Token": `Bearer${localStorage.getItem("Refresh-Token")}`,
        },
        withCredentials: true,
      }
    )
    .then((data) => {
      localStorage.setItem(
        "Access-Token",
        data.headers.authorization.replace("Bearer", "")
      );
      if (callBack != null) callBack();
    })
    .catch((error) => {
      localStorage.clear();
      navigate("/login");
      toast.error("다시 로그인 해주세요.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
};
