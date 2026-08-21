import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../../SideNav';

import { Section } from '../../Section';
import { Form } from './Form';

export const contactDetails = {
  phone: '(31) 99897-9774',
  phoneHref: 'https://wa.me/message/YAJAA3RXTF7RG1',
  email: 'contato@cosmomapeamento.com.br',
  emailHref: 'mailto:contato@cosmomapeamento.com.br',
  hoursLabel: 'Atendimento',
  hours: 'Segunda à sexta - 08h às 17h',
  location: 'Belo Horizonte - Minas Gerais',
  cnpj: 'CNPJ: 41.889.909/0001-20',
} as const;

export const socialLinks = [
  {
    href: 'https://www.instagram.com/cosmomapeamento/',
    label: 'Instagram',
    icon: '/img/contact-icons/instagram.webp',
  },
  {
    href: 'https://www.linkedin.com/company/cosmo-mapeamento-ambiental',
    label: 'LinkedIn',
    icon: '/img/contact-icons/linkedin.webp',
  },
] as const;

const DISPLAY_NAME = 'ContactSection';
export const ContactSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section
      className="min-h-[calc(min(100vh,1080px)-var(--footer-height))] bg-cover bg-fixed py-12 font-bold text-white bg-srcset-[/img/backgrounds/background.webp] [--footer-height:2.75rem]"
      {...props}
      ref={ref}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-title text-white">
          <strong>Contato</strong>
        </h2>

        <div className="mt-12 grid gap-12 p-6 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-10">
          <div className="grid gap-8">
            <ul
              className="grid items-start gap-5 text-sm leading-relaxed"
              aria-label="Informações de contato"
            >
              <li className="flex items-start gap-2">
                <div className="flex flex-col gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      className="block transition-opacity hocus:opacity-70"
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        width={36}
                        height={36}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>

                <p className="m-0 flex flex-col self-center font-title text-xs font-bold uppercase tracking-[0.14em]">
                  Redes <span>sociais</span>
                </p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/img/contact-icons/mail.webp"
                  alt="Email"
                  width={36}
                  height={36}
                  loading="lazy"
                />
                <div>
                  <p className="m-0 font-title text-xs font-bold uppercase tracking-[0.14em]">
                    Email
                  </p>
                  <p className="m-0 mt-1">
                    <a
                      className="underline underline-offset-4 transition-colors"
                      href={contactDetails.emailHref}
                    >
                      {contactDetails.email}
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/img/contact-icons/whatsapp.webp"
                  alt="Telefone / Whatsapp"
                  width={36}
                  height={36}
                  loading="lazy"
                />
                <div>
                  <p className="m-0 font-title text-xs font-bold uppercase tracking-[0.14em]">
                    Telefone / Whatsapp
                  </p>
                  <p className="m-0 mt-1">
                    <a
                      className="underline underline-offset-4 transition-colors"
                      href={contactDetails.phoneHref}
                    >
                      {contactDetails.phone}
                    </a>
                  </p>
                  <p className="m-0 mt-2">
                    {contactDetails.hoursLabel}
                    <br />
                    {contactDetails.hours}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/img/contact-icons/location.webp"
                  alt="Local"
                  width={36}
                  height={36}
                  loading="lazy"
                />
                <div>
                  <p className="m-0 font-title text-xs font-bold uppercase tracking-[0.14em]">
                    Local
                  </p>
                  <p className="m-0 mt-1">{contactDetails.location}</p>
                  <p className="m-0">{contactDetails.cnpj}</p>
                </div>
              </li>
            </ul>
          </div>

          <Form />
        </div>
      </div>
    </Section>
  )
);

ContactSection.displayName = DISPLAY_NAME;
