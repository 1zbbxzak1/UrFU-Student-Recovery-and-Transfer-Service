import axios from "axios";

export const getUserInfo = async (setUserInfo) => {
  const token = localStorage.getItem("token");

  try {
    const apiUrl = "http://localhost:8080/api/user";

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(apiUrl, { headers });

    if (response.status === 200) {
      const data = response.data;
      setUserInfo(data);
      console.log("User info fetched successfully:", data);
    } else {
      console.error("Failed to fetch user info");
    }
  } catch (error) {
    console.error("Error fetching user info", error);
  }
};

export const handleUpdateUserInfo = async (newInfo) => {
  const yourAccessToken = localStorage.getItem("token");

  try {
    const response = await axios.put(
      "http://localhost:8080/api/user/info",
      newInfo,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${yourAccessToken}`,
        },
      }
    );

    console.log("Update successful", response.data);
  } catch (error) {
    console.error("Update failed", error);
  }

  window.location.href = "/dashboard";
};

export const getUserInfoById = async (id, setUserInfo) => {
  const token = localStorage.getItem("token");

  try {
    const apiUrl = `http://localhost:8080/api/user/id?id=${id}`;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(apiUrl, { headers });

    if (response.status === 200) {
      const data = response.data;
      setUserInfo(data);
      console.log("User info fetched successfully:", data);
    } else {
      console.error("Failed to fetch user info");
    }
  } catch (error) {
    console.error("Error fetching user info", error);
  }
};