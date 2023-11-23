"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-0 gap-4 relative"
    >
      <div className="z-10">
        <h2 className="text-4xl font-semibold text-zinc-700 mb-8">
          Часто задаваемые вопросы
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

        <div class="u-accordion">
          <div class="u-accordion-title">
            Как начать процесс восстановления или перевода студента в УрФУ через ваш сервис?
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

        <div class="u-accordion">
          <div class="u-accordion-title">
            Каковы сроки рассмотрения заявки на восстановление или перевод студента?
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

        <div class="u-accordion">
          <div class="u-accordion-title">
            Как связаться с вашей поддержкой, если у меня возникли вопросы SSSSSSSSSSSS?
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
        <br/><br/><br/>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-zinc-700 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col ml-32 mt-2" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-zinc-700 block mb-2 text-sm font-medium"
              >
                Ваш email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#F6F6F6] border border-[#33353F] placeholder-[#545454] text-zinc-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-zinc-700 block text-sm mb-2 font-medium"
              >
                Тема
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#F6F6F6] border border-[#33353F] placeholder-[#545454] text-zinc-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-zinc-700 block text-sm mb-2 font-medium"
              >
                Сообщение
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#F6F6F6] border border-[#33353F] placeholder-[#545454] text-zinc-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-main hover:bg-[#0F2B5E] text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
