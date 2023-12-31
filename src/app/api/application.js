import axios from "axios";

const formatDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  return `${day}.${month}.${year}`;
};

export const AddApplicationButton = async (
  Type,
  DetailedType,
  selectedItemId,
  pssport,
  recordBook,
  registrationСertificate,
  payerPassport,
  application
) => {
  const formattedDate = formatDate();

  console.log(formattedDate);
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("Type", Type);
  formData.append("DetailedType", DetailedType);
  formData.append("Date", formattedDate);
  formData.append("DirectionId", selectedItemId);
  formData.append("formFiles", pssport);
  formData.append("formFiles", recordBook);
  formData.append("formFiles", registrationСertificate);
  formData.append("formFiles", payerPassport);
  formData.append("formFiles", application);

  try {
    const response = await axios.post(
      "http://localhost:8080/api/applications",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("User applications fetched successfully:", response.data);
  } catch (error) {
    console.error("Failed to fetch user applications:", error.message);
  }
};

export const getAllApplications = async (setAllApplications) => {
  const token = localStorage.getItem("token");

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get("http://localhost:8080/api/applications", {
      headers,
    });

    if (response.status === 200) {
      const data = response.data;
      setAllApplications(data);
      console.log("User applications fetched and filtered successfully:", data);
    } else {
      console.error("Failed to fetch user applications");
    }
  } catch (error) {
    console.error("Error fetching user applications", error);
  }
};

export const getApplicationsByStatus = async (
  setAllApplications,
  filterByStatus
) => {
  const token = localStorage.getItem("token");

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get("http://localhost:8080/api/applications", {
      headers,
    });

    if (response.status === 200) {
      const data = response.data;

      // Фильтрация по статусу
      const filteredData = filterByStatus
        ? data.filter((app) => filterByStatus.includes(app.status))
        : data;

      setAllApplications(filteredData);
      console.log(
        "User applications fetched and filtered successfully:",
        filteredData
      );
    } else {
      console.error("Failed to fetch user applications");
    }
  } catch (error) {
    console.error("Error fetching user applications", error);
  }
};

export const getApplicationById = async (id, setApplication) => {
  const token = localStorage.getItem("token");

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `http://localhost:8080/api/applications/${id}`,
      {
        headers,
      }
    );

    if (response.status === 200) {
      const data = response.data;

      setApplication(data);
      console.log("User application fetched successfully:", data);
    } else {
      console.error("Failed to fetch user application");
    }
  } catch (error) {
    console.error("Error fetching user application", error);
  }
};

export const deleteApplicationById = async (id) => {
  const token = localStorage.getItem("token");

  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.delete(
      `http://localhost:8080/api/applications/${id}`,
      {
        headers,
      }
    );
    console.log("User application delete successfully");
  } catch (error) {
    console.error("Error deleting user application");
  }
};

export const updateStatus = async (numericId, updatedData) => {
  const applicationId = numericId;

  try {
    const response = await axios.post(
      `http://localhost:8080/api/applications/${applicationId}/status`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 204) {
      console.log("Status updated successfully");
    } else {
      console.error("Failed to update status");
    }
  } catch (error) {
    console.error("Error updating status:", error.message);
  }
};
