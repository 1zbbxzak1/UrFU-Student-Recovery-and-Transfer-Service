"use client";
import React, { useState, useEffect } from "react";
import { getStatusClassName } from "../const";
import { formatInintialDate } from "../const";
import { formatUpdateDate } from "../const";
import { getAllApplications } from "../api/application";

const ApplicationSection = () => {
  const [applications, setApplications] = useState([]);

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
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan="6">
                      <div className="text-center">
                        <span className="text-neutral-400 text-[16px] leading-[17.07px] font-normal">
                          Нет заявок.
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  applications.map((item) => {
                    const lastStatusUpdate =
                      item.statusUpdates[item.statusUpdates.length - 1];
                    const lastUpdateDate = lastStatusUpdate
                      ? lastStatusUpdate.date
                      : item.updateDate;

                    return (
                      <tr key={item.id}>
                        <td>№{item.id}</td>
                        <td>{item.type}</td>
                        <td className="max-w-[350px]">
                          {item.direction.code} {item.direction.name}
                        </td>
                        <td>{formatInintialDate(item.initialDate)}</td>
                        <td>{formatUpdateDate(lastUpdateDate)}</td>
                        <td>
                          <div className={getStatusClassName(item.status)}>
                            {item.status}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
