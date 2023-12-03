import axios from "axios";

export const updateData = async (setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.post(
      "http://localhost:5270/api/vacant/update"
    );
    console.log("Вызван POST", response.data);
  } catch (error) {
    console.error("Ошибка запроса", error);
  } finally {
    setIsLoading(false);
  }
};

export const getData = async (setTableData, setIsLoading) => {
  try {
    setIsLoading(true);
    const getResult = await axios.get("http://localhost:5270/api/vacant");
    console.log("Вызван GET", getResult.data);

    setTableData([]);

    setTableData(getResult.data);
  } catch (error) {
    console.error("Ошибка запроса", error);
  } finally {
    setIsLoading(false);
  }
};
