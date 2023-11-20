import axios from "axios";

export const refresh = async (navigate, callBack) => {
  await axios
    .get("http://localhost:8080/refresh", {
      headers: {
        "Refresh-Token": `Bearer${localStorage.getItem("Refresh-Token")}`,
      },
      withCredentials: true,
    })
    .then((data) => {
      localStorage.setItem(
        "Access-Token",
        data.headers.authorization.replace("Bearer", "")
      );
      callBack();
    })
    .catch((error) => {
      localStorage.clear();
      navigate("/login");
    });
};
