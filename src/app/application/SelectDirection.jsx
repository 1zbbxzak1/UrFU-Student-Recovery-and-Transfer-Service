import React, { useState, useEffect } from "react";
import { getDataVacant } from "../api/vacant";

const SelectDirection = ({
  selectedItemId,
  setSelectedItemId,
  header,
  academicGroup,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [vacantData, setVacantData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredData = vacantData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getDataVacant(setVacantData, setIsLoading);
  }, []);

  return (
    <section>
      <div className="items-center justify-center">
        <h3 className="max-w-[780px] text-left text-[#1E4391] text-[24px] leading-[29.26px] font-semibold">
          {header}
        </h3>
      </div>
      <div className="underline-application"></div>
      {academicGroup}
      <div className="text-left mt-[40px] mb-[15px]">
        <span className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium">
          Выберите направление{" "}
        </span>
        <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-normal">
          (с полным списком вакантных мест можно ознакомиться по{" "}
        </span>
        <u>
          <a
            href="/vacant"
            className="text-blue-900 text-[14px] leading-[17.07px] font-normal"
          >
            ссылке
          </a>
        </u>
        <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-normal">
          )
        </span>
      </div>
      <div className="mb-[30px]">
        <div
          className={`u-selectbox-select ${
            isOpen ? "u-selectbox-select-open" : ""
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <input
              type="text"
              placeholder="Введите наименование"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-white no-outline placeholder-[#9CA2A9] text-black text-sm w-full"
            />
          ) : (
            <span className="u-selectbox-select-title">
              {selectedItem || "Выбрать"}
            </span>
          )}
          <i
            className="u-selectbox-select-icon-cross"
            onClick={() => {
              setSelectedItem("");
              setSelectedItemId(null);
            }}
          ></i>
          <i className="u-selectbox-select-icon-arrow"></i>
        </div>
        {isOpen && (
          <div className="u-selectbox-options">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className={`u-selectbox-option ${
                  selectedItemId === item.id ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedItemId(item.id);
                  setSelectedItem(
                    `${item.code} ${item.name} ${
                      item.course
                    } курс ${item.form.toLowerCase()}`
                  );
                  setIsOpen(false);
                }}
              >
                {`${item.code} ${item.name} ${
                  item.course
                } курс ${item.form.toLowerCase()}`}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SelectDirection;
