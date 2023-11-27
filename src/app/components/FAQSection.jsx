"use client";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="my-12 md:my-12 py-0 relative"
    >
      <div className="z-auto mb-12">
        <h2 className="text-4xl font-semibold text-zinc-700 mb-12">
          Часто задаваемые вопросы
          <div className="w-[1430px] h-[1px] ml-0 mt-2 absolute bg-neutral-400"></div>
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
        <div className="w-[1120px] h-[1px] ml-0 absolute bg-neutral-400"></div>

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
        <div className="w-[1120px] h-[1px] ml-0 absolute bg-neutral-400"></div>

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
        <div className="w-[1120px] h-[1px] ml-0 absolute bg-neutral-400"></div>

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

export default EmailSection;
