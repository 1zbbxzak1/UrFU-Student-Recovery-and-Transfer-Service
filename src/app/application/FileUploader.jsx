import React, { useState } from "react";

const FileUploader = ({ file, setFile }) => {
  const [loading, setLoading] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleFileInputChange = async (event) => {
    const selectedFile = event.target.files[0];
    setLoading(true);

    // Принудительная задержка загрузки в 1 секунд
    await sleep(1000);

    setFile(selectedFile);
    setLoading(false);
  };

  const getFileExtensionIcon = (fileName) => {
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

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="grid grid-rows-10 gap-y-5">
      {file ? (
        // Этап 3: когда файл прикреплен
        <div className="inline-flex space-x-3 justify-left items-center">
          <span className="text-[#1E4391] text-[14px] leading-[17.07px] font-medium">
            Файл загружен:
          </span>
          <div className="u-file-cell">
            <div
              className={`u-file-cell-icon ${getFileExtensionIcon(file.name)}`}
            ></div>
            <div className="u-file-cell-content">
              <div className="u-file-cell-content-wrapper">
                <p>{file.name}</p>
                <div className="u-file-cell-content-props">
                  <span style={{ marginRight: "5px" }}>
                    {Math.floor(file.size / 1024)} Кб
                  </span>
                  <span>
                    {new Date(file.lastModified).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <button type="button" onClick={handleRemoveFile}></button>
          </div>
        </div>
      ) : loading ? (
        // Этап 2: во время загрузки файла
        <label id="fileinput" className="u-file">
          <i className="u-file-icon-loading"></i>
          <p className="u-file-title-loading">Загрузка файлов...</p>
        </label>
      ) : (
        // Этап 1: когда файл не прикреплен
        <label id="fileinput" className="u-file">
          <input type="file" id="fileinput" onChange={handleFileInputChange} />
          <i className="u-file-icon"></i>
          <p className="u-file-title">
            Перетащите сюда файлы или нажмите, чтобы выбрать
          </p>
          <p className="u-file-subtitle">Максимальный размер файла 8 Мб</p>
        </label>
      )}
    </div>
  );
};

export default FileUploader;
