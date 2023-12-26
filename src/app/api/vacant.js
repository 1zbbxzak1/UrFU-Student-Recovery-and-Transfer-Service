import axios from "axios";

export const updateDataVacant = async (setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.post(
      "http://localhost:8080/api/vacant/update"
    );
    console.log("Вызван POST", response.data);
  } catch (error) {
    console.error("Ошибка запроса", error);
  } finally {
    setIsLoading(false);
  }
};

export const getDataVacant = async (setTableData, setIsLoading) => {
  try {
    setIsLoading(true);
    const getResult = await axios.get("http://localhost:8080/api/vacant");
    console.log("Вызван GET", getResult.data);

    setTableData([]);

    setTableData(getResult.data);
  } catch (error) {
    console.error("Ошибка запроса", error);
  } finally {
    setIsLoading(false);
  }
};