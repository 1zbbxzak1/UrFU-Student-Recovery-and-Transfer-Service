"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const VacantSection = () => {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState([]);

  const updateData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5270/api/vacant/update"
      );
      console.log(response.data);

      const getResult = await axios.get("http://localhost:5270/api/vacant");
      setTableData(getResult.data);
    } catch (error) {
      console.error("Ошибка запроса", error);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <main className="mt-10 mb-10">
      <h2 className="mb-10 text-left text-zinc-700">
        Наличие вакантных бюджетных мест по
        <br />
        реализуемым в 2023/2024 учебном году
        <br />
        направлениям (специальностям) высшего
        <br />
        образования
      </h2>

      <div className="u-search">
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

      <div className="u-table">
        <table className="table">
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
              .map((item, index) => (
                <tr key={index}>
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
    </main>
  );
};

export default VacantSection;
