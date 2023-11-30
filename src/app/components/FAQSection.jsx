"use client";

const FAQSection = () => {
  return (
    <section
      id="contact"
      className="mx-[-15px] my-12 lg:my-20 lg:mx-20"
    >
      <div className="mb-12">
        <h2 className="text-2xl lg:text-4xl font-semibold text-zinc-700 mb-10">
          Часто задаваемые вопросы
          <div className="w-full lg:w-[1280px] h-[1px] ml-0 mt-3 bg-neutral-400"/>
        </h2>
                  
        <div className="u-accordion">
          <div className="u-accordion-title">
            Могу ли я отслеживать статус своей заявки на восстановление или перевод через ваш сервис?
          </div>
          <input
            className="u-accordion-input"
            type="checkbox"
            id="accordion_1"
            name="a1"
          />
          <label className="u-accordion-toggle" htmlFor="accordion_1"></label>
          <div className="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
        <div className="w-full lg:w-[1120px] h-[1px] ml-0 bg-neutral-400"/>

        <div className="u-accordion">
          <div className="u-accordion-title">
            Каковы сроки рассмотрения заявки на восстановление или перевод студента?
          </div>
          <input
            className="u-accordion-input"
            type="checkbox"
            id="accordion_2"
            name="a2"
          />
          <label className="u-accordion-toggle" htmlFor="accordion_2"></label>
          <div className="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
        <div className="w-full lg:w-[1120px] h-[1px] ml-0 bg-neutral-400"/>

        <div className="u-accordion">
          <div className="u-accordion-title">
            Как начать процесс восстановления или перевода студента в УрФУ через ваш сервис?
          </div>
          <input
            className="u-accordion-input"
            type="checkbox"
            name="a3"
            id="accordion_3"
          />
          <label className="u-accordion-toggle" htmlFor="accordion_3"></label>
          <div className="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
        <div className="w-full lg:w-[1120px] h-[1px] ml-0 bg-neutral-400"/>

        <div className="u-accordion">
          <div className="u-accordion-title">
            Как начать процесс восстановления или перевода студента в УрФУ через ваш сервис?
          </div>
          <input
            className="u-accordion-input"
            type="checkbox"
            name="a4"
            id="accordion_4"
          />
          <label className="u-accordion-toggle" htmlFor="accordion_4"></label>
          <div className="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
