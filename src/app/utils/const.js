let sessionStatusValue = false;

export const getSessionStatus = () => sessionStatusValue;

export const setSessionStatus = (value) => {
  sessionStatusValue = value;
};

export function getStatusClassName(status) {
  switch (status) {
    case "На рассмотрении":
      return "u-status u-status-intermediate";
    case "Принято":
      return "u-status u-status-success";
    case "Отклонено":
      return "u-status u-status-danger";
    default:
      return "u-status u-status-info";
  }
}

export const getFileExtensionIcon = (fileName) => {
  const extension = fileName.split(".").pop().toLowerCase();

  switch (extension) {
    case "pdf":
      return "pdf";
    case "doc":
    case "docx":
      return "doc";
    case "zip":
      return "zip";
    case "xls":
    case "xlsx":
      return "xls";
    case "img":
      return "img";
    case "png":
      return "png";
    case "jpg":
      return "jpg";
    case "ppt":
      return "ppt";
    case "svg":
      return "svg";
    default:
      return "default";
  }
};

export const formatInintialDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;

  return formattedDate;
};

export const formatUpdateDate = (updateDate) => {
  const dateObject = new Date(updateDate);

  const hours = dateObject.getUTCHours();
  const minutes = dateObject.getUTCMinutes();
  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1;
  const year = dateObject.getUTCFullYear();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  const formattedDate = `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;

  return `${formattedTime} ${formattedDate}`;
};
