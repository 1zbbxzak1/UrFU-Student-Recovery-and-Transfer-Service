"use client";

const FAQSection = () => {
  return (
    <section id="contact" className="my-12 lg:my-20">
      <div className="items-center px-12 xl:px-16">
        <div className="w-full h-[1px] bg-[#D3D3D3]" />
      </div>
      <div className="items-center px-12 py-12 sm:py-16 xl:px-16 mb-12">
        <h2 className="text-2xl lg:text-[28px] leading-[34.13px] font-semibold text-zinc-700 mb-10">
          Часто задаваемые вопросы
        </h2>

        <div className="bg-[#FFFFFF] border border-solid border-[#D3D3D3]">
          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Когда можно перевестись?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              id="accordion_1"
              name="a1"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_1"
            ></label>
            <div className="u-accordion-content-main">
              Заявления принимаются 2 раза в год в каждом семестре:
              <ul className="font-normal list-inside list-disc">
                <li className="my-2">До 5 февраля для перевода на весенний семестр;</li>
                <li>До 5 июля для перевода на осенний семестр.</li>
              </ul>
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Когда можно восстановиться?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              id="accordion_2"
              name="a2"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_2"
            ></label>
            <div className="u-accordion-content-main">
              Заявление можно подать до середины второго месяца каждого
              семестра.
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Можно ли подать заявление на восстановление или перевод очно?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a3"
              id="accordion_3"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_3"
            ></label>
            <div className="u-accordion-content-main">
              Да. Если вы не хотите пользоваться онлайн-сервисом, то вы можете
              посетить деканат своего института очно для подачи документов.
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Как быстро рассмотрят заявление?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a4"
              id="accordion_4"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_4"
            ></label>
            <div className="u-accordion-content-main">
              На странице с описанием каждого перевода и восстановления в
              разделе «Дополнительно» указаны сроки. В большинстве случаев
              процесс занимает до 1 календарного месяца.
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Я отправил заявление, что делать дальше?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a5"
              id="accordion_5"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_5"
            ></label>
            <div className="u-accordion-content-main">
              В ближайшее время с вами свяжется сотрудник деканата. Ждите
              сообщения в разделе «Заявки».
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Могу ли я отслеживать статус заявки?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a6"
              id="accordion_6"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_6"
            ></label>
            <div className="u-accordion-content-main">
              Да, наш сервис предоставляет возможность отслеживать статус вашей
              заявки в режиме реального времени. Вы сможете узнать, на каком
              этапе находится ваша заявка.
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Можно ли удалить заявление на перевод или восстановление?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a7"
              id="accordion_7"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_7"
            ></label>
            <div className="u-accordion-content-main">
              Да, на странице «Заявки» нажмите на своё заявление и затем нажмите
              на кнопку «удалить».
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Могу ли я перевестись из другого университета?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a8"
              id="accordion_8"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_8"
            ></label>
            <div className="u-accordion-content-main">
              Нет, сервис не предоставляет возможность перевестись из другого
              университета. Но вы можете посетить сайт университета, где есть
              такой функционал.
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Деканат не рассматривает моё заявление долгое время.
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a9"
              id="accordion_9"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_9"
            ></label>
            <div className="u-accordion-content-main">
              Свяжитесь с сотрудником деканата по почте или по телефону.
              Контакты ответственных за перевод и восстановление каждого
              института расположены в разделе «Контакты».
            </div>
            <div className="w-full h-[1px] bg-[#D3D3D3]" />
          </div>

          <div className="u-accordion-main">
            <div className="u-accordion-title-main">
              Сервис работает для всех институтов УрФУ?
            </div>
            <input
              className="u-accordion-input-main"
              type="checkbox"
              name="a10"
              id="accordion_10"
            />
            <label
              className="u-accordion-toggle-main"
              htmlFor="accordion_10"
            ></label>
            <div className="u-accordion-content-main">
              Да, сервис работает для всех институтов УрФУ.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
