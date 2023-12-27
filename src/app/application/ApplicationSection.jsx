"use client";
import React, { useState, useEffect } from "react";
import { getAllApplications } from "../api/application";

const ApplicationSection = () => {
  const [applications, setApplications] = useState([]);

  const formatInintialDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;

    return formattedDate;
  };

  const formatUpdateDate = (updateDate) => {
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

  useEffect(() => {
    getAllApplications(setApplications);
  }, []);

  return (
    <section className="my-[80px] mx-[80px]">
      <h2 className="mb-[40px] text-[36px] leading-[50.4px] text-left text-zinc-700">
        Мои заявки
      </h2>
      <div className="w-full flex flex-col relative">
        <div className="bg-white rounded-[20px] border border-neutral-300 px-[80px] pt-[10px] pb-[30px]">
          <div className="u-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Номер заявки</th>
                  <th>Тип заявки</th>
                  <th>Направление</th>
                  <th>Дата подачи</th>
                  <th>Обновлено</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((item) => (
                  <tr key={item.id}>
                    <td>№{item.id}</td>
                    <td>{item.type}</td>
                    <td className="max-w-[350px]">
                      {item.direction.code} {item.direction.name}
                    </td>
                    <td>
                      {formatInintialDate(item.initialDate)}
                    </td>
                    <td>
                      {formatUpdateDate(item.updateDate)}
                    </td>
                    <td>
                      <div className="u-status u-status-info">
                        {item.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
