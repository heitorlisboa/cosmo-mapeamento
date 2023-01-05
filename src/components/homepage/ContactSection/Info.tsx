import type { FC } from 'react';

// Icons
const whatsappIcon = '/img/contact-icons/whatsapp.webp';
const localIcon = '/img/contact-icons/local.webp';

export const Info: FC = () => (
  <ul
    className="mx-auto mt-12 grid items-center justify-center justify-items-center gap-12 px-4 text-center text-sm leading-normal lg:grid-flow-col lg:gap-8 [&_p]:m-0 lg:[&>li]:w-56"
    aria-label="Informações de contato"
  >
    <li>
      <p>Email</p>
      <p>
        <a
          className="underline transition-opacity hocus:opacity-60"
          href="mailto:contato@cosmomapeamento.com.br"
        >
          contato@cosmomapeamento.com.br
        </a>
      </p>
    </li>

    <div className="hidden h-24 w-[3px] bg-white lg:block" aria-hidden />

    <li className="grid justify-items-center gap-4">
      <div className="flex items-center gap-2">
        <a
          className="transition-opacity hocus:opacity-60"
          href="https://wa.me/message/YAJAA3RXTF7RG1"
        >
          <img src={whatsappIcon} alt="Whatsapp" loading="lazy" />
        </a>
        <div className="grid items-center">
          <p>Telefone / Whatsapp</p>
          <p>(31) 99897-9774</p>
        </div>
      </div>
      <div>
        <p>Atendimento</p>
        <p>Segunda à sexta - 09h às 18h</p>
      </div>
    </li>

    <div className="hidden h-24 w-[3px] bg-white lg:block" aria-hidden />

    <li className="flex items-center gap-2">
      <img src={localIcon} alt="" loading="lazy" />
      <div className="grid items-center">
        <p>Contagem - Minas Gerais</p>
        <p>CNPJ: 41.899.909/0001-20</p>
      </div>
    </li>
  </ul>
);
