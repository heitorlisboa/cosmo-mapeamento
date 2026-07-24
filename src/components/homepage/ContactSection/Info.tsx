import type { FC } from 'react';

// Icons
const mailIcon = '/img/contact-icons/mail.webp';
const whatsappIcon = '/img/contact-icons/whatsapp.webp';
const locationIcon = '/img/contact-icons/location.webp';

export const Info: FC = () => (
  <ul
    className="mx-auto mt-12 grid items-center justify-center justify-items-center gap-12 px-4 text-center text-[0.9375rem] leading-normal lg:grid-flow-col lg:gap-4 [&_p]:m-0"
    aria-label="Informações de contato"
  >
    <li className="flex items-center gap-2 lg:pr-0">
      <img src={mailIcon} alt="" width={36} height={36} loading="lazy" />
      <div className="grid items-center">
        <p>Email</p>
        <p>
          <a
            className="underline transition-opacity hocus:opacity-60"
            href="mailto:contato@cosmomapeamento.com.br"
          >
            contato@cosmomapeamento.
            <wbr />
            com.br
          </a>
        </p>
      </div>
    </li>

    <div className="ml-4 hidden h-24 w-[3px] bg-white lg:block" aria-hidden />

    <li className="grid justify-items-center gap-4 lg:w-[17rem]">
      <div className="flex items-center gap-2">
        <a
          className="transition-opacity hocus:opacity-60"
          href="https://wa.me/message/YAJAA3RXTF7RG1"
        >
          <img
            src={whatsappIcon}
            alt="Whatsapp"
            width={36}
            height={36}
            loading="lazy"
          />
        </a>
        <div className="grid items-center">
          <p>Telefone / Whatsapp</p>
          <p>(31) 99897-9774</p>
        </div>
      </div>
      <div>
        <p>Atendimento</p>
        <p>Segunda à sexta - 08h às 17h</p>
      </div>
    </li>

    <div className="mr-4 hidden h-24 w-[3px] bg-white lg:block" aria-hidden />

    <li className="flex items-center gap-2">
      <img src={locationIcon} alt="" width={36} height={36} loading="lazy" />
      <div className="grid items-center">
        <p>Belo Horizonte - Minas Gerais</p>
        <p>CNPJ: 41.889.909/0001-20</p>
      </div>
    </li>
  </ul>
);
