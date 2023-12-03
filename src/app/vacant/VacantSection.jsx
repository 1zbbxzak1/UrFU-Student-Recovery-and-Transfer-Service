"use client";
import React, { useEffect, useState } from "react";
import { updateData, getData } from "../api/route";

const VacantSection = () => {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleUpdateData = () => {
    updateData(setIsLoading);
  };

  useEffect(() => {
    getData(setTableData, setIsLoading);
  }, []);

  return (
    <main className="mt-10 mb-10">
      <h2 className="text-4xl font-semibold leading-[50.4px] mb-5 text-left text-zinc-700">
        Наличие вакантных бюджетных мест по
        <br />
        реализуемым в 2023/2024 учебном году
        <br />
        направлениям (специальностям) высшего
        <br />
        образования
      </h2>

      <div className="w-[30px]" id="u-help-vacant">
        <div id="u-help-tooltip-vacant">Нажмите для обновления данных</div>
        <button className="mb-5 ml-[10px]" onClick={handleUpdateData}>
          <i className="u-icon icon-upload"></i>
        </button>
      </div>

      <div className="u-search mb-4 w-full">
        <input
          placeholder="Введите наименование"
          className="u-input"
          type="search"
          name=""
          id=""
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="u-search-loupe" type="button"></button>
      </div>

      {isLoading ? (
        <div className="flex place-content-center">
          <div className="u-preloader-mini">
            <svg
              className="u-preloader-mini-container"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23" stroke="#1E4391" strokeWidth="2" />
              <circle
                className="u-preloader-mini-dot"
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="#1E4391"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="u-table-vacant">
          <table className="table-vacant">
            <thead>
              <tr>
                <th rowSpan="2">Код</th>
                <th rowSpan="2">Наименование</th>
                <th rowSpan="2">Уровень образования</th>
                <th rowSpan="2">Курс</th>
                <th rowSpan="2">Форма обучения</th>
                <th colSpan="4">
                  Количество вакантных мест для приема (перевода) на места,
                  финансируемые за счет
                </th>
              </tr>
              <tr>
                <th>бюджетных ассигнований федерального бюджета</th>
                <th>бюджетов субъектов Российской Федерации</th>
                <th>местных бюджетов</th>
                <th>
                  по договорам об образовании за счет средств физических
                  и&nbsp;(или) юридических лиц
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.level}</td>
                    <td>{item.course}</td>
                    <td>{item.form}</td>
                    <td>{item.federalBudgets}</td>
                    <td>{item.subjectsBudgets}</td>
                    <td>{item.localBudgets}</td>
                    <td>{item.contracts}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default VacantSection;
