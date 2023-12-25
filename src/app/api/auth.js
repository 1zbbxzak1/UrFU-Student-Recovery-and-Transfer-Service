const BASE_URL = "http://localhost:5270/api";

async function apiFetch(url, method, data = null) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };

  const options = {
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${url}`, options);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Что-то пошло не так");
  }

  return responseData;
}

export { apiFetch };

