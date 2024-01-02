"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getStatusClassName } from "../../const";
import { formatInintialDate } from "../../const";
import { formatUpdateDate } from "../../const";
import { getAllApplications } from "@/app/api/application";
import TypeTag from "../TypeTag";

const ApplicationSection = () => {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const [tag, setTag] = useState("Отправленные");

  const handleTagChange = async (newTag, appTag) => {
    setTag(newTag);
    await getAllApplications(setApplications, appTag);
  };

  useEffect(() => {
    handleTagChange("Отправленные", ["Отправлено"]);
  }, []);

  return (
    <section className="my-[80px] mx-[80px]">
      <h2 className="mb-[40px] text-[36px] leading-[50.4px] text-left text-zinc-700">
        Все заявки
      </h2>

      <div className="text-white grid grid-cols-5 grid-rows-1 gap-2 items-center mt-[30px] mb-[20px]">
        <TypeTag
          onClick={() => handleTagChange("Отправленные", ["Отправлено"])}
          name="Отправленные"
          isSelected={tag === "Отправленные"}
        />
        <TypeTag
          onClick={() => handleTagChange("На проверке", ["На рассмотрении"])}
          name="На проверке"
          isSelected={tag === "На проверке"}
        />
        <TypeTag
          onClick={() =>
            handleTagChange("Завершенные", ["Принято", "Отклонено"])
          }
          name="Завершенные"
          isSelected={tag === "Завершенные"}
        />

        <div />

        <div className="u-search w-full mx-0">
          <input
            placeholder="Введите номер заявки"
            className="u-input"
            type="search"
            name=""
            id=""
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="u-search-loupe" type="button"></button>
        </div>
      </div>

      <div className="w-full flex flex-col relative">
        <div className="bg-white rounded-[20px] border border-neutral-300 px-[80px] pt-[10px] pb-[30px]">
          <div className="u-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Номер заявки</th>
                  <th>ФИО</th>
                  <th>Тип заявки</th>
                  <th className="max-w-[250px]">Направление</th>
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
                  applications
                    .filter((item) => {
                      const itemIdAsString = String(item.id);
                      return search.toLowerCase() === ""
                        ? item
                        : itemIdAsString.toLowerCase().includes(search);
                    })
                    .map((item) => {
                      const lastStatusUpdate =
                        item.statusUpdates[item.statusUpdates.length - 1];
                      const lastUpdateDate = lastStatusUpdate
                        ? lastStatusUpdate.date
                        : item.updateDate;

                      return (
                        <tr
                          key={item.id}
                          onClick={() => {
                            if (item.status === "Отправлено") {
                              router.push(
                                `/application/details/SendApp/${item.id}`
                              );
                            } else if (item.status === "На рассмотрении") {
                              router.push(
                                `/application/details/FinishApp/${item.id}`
                              );
                            }
                          }}
                        >
                          <td>№{item.id}</td>
                          <td>{item.userFullName}</td>
                          <td>{item.type}</td>
                          <td className="max-w-[250px]">
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
