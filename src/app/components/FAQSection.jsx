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
                  
        <div class="u-accordion">
          <div class="u-accordion-title">
            Могу ли я отслеживать статус своей заявки на восстановление или перевод через ваш сервис?
          </div>
          <input
            class="u-accordion-input"
            type="checkbox"
            name=""
            id="accordion_1"
          />
          <label class="u-accordion-toggle" for="accordion_1"></label>
          <div class="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
        <div className="w-full lg:w-[1120px] h-[1px] ml-0 bg-neutral-400"/>

        <div class="u-accordion">
          <div class="u-accordion-title">
            Каковы сроки рассмотрения заявки на восстановление или перевод студента?
          </div>
          <input
            class="u-accordion-input"
            type="checkbox"
            name=""
            id="accordion_2"
          />
          <label class="u-accordion-toggle" for="accordion_2"></label>
          <div class="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
        <div className="w-full lg:w-[1120px] h-[1px] ml-0 bg-neutral-400"/>

        <div class="u-accordion">
          <div class="u-accordion-title">
            Как начать процесс восстановления или перевода студента в УрФУ через ваш сервис?
          </div>
          <input
            class="u-accordion-input"
            type="checkbox"
            name=""
            id="accordion_3"
          />
          <label class="u-accordion-toggle" for="accordion_3"></label>
          <div class="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
        <div className="w-full lg:w-[1120px] h-[1px] ml-0 bg-neutral-400"/>

        <div class="u-accordion">
          <div class="u-accordion-title">
            Как начать процесс восстановления или перевода студента в УрФУ через ваш сервис?
          </div>
          <input
            class="u-accordion-input"
            type="checkbox"
            name=""
            id="accordion_4"
          />
          <label class="u-accordion-toggle" for="accordion_4"></label>
          <div class="u-accordion-content">
            Да, наш сервис предоставляет возможность отслеживать статус вашей заявки в режиме реального времени. Вы сможете узнать, на каком этапе находится ваша заявка.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
