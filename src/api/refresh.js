import axios from "axios";

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
    });
};
