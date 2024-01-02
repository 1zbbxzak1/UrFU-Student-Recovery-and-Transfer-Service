import React from "react";

const CreateApplication = ({ children }) => {
  return (
    <section className="flex justify-left items-left mt-[50px]">
      <div className="w-full flex flex-col relative">
        <div className="bg-white rounded-[20px] border border-neutral-300 px-[20px] py-[30px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CreateApplication;
