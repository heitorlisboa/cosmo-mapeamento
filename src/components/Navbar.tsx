import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react';

const links = [
  { href: '#services', label: 'Catálogo de serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#team', label: 'Quem somos' },
  { href: '#institutional', label: 'Institucional' },
  { href: '#customers-partners', label: 'Clientes e parceiros' },
  { href: '#contact', label: 'Contato' },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <nav
        className="-mb-16 hidden rounded-full bg-[#4101D0] py-5 font-bold leading-normal text-white shadow-2xl shadow-black/50 md:block"
        aria-label="Navegação principal"
      >
        <ul className="flex flex-wrap justify-center gap-6 px-8 lg:justify-evenly [&_a]:transition-colors [&_a]:duration-300 hocus:[&_a]:text-[#c49bff]">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="-mb-10 sm:-mb-12 md:hidden">
        <button
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#4101D0] px-5 py-4 font-bold text-white shadow-2xl shadow-black/50 transition-colors hocus:bg-[#4f12e0]"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="h-5 w-5" aria-hidden />
          Menu
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          id="mobile-nav-menu"
          className="relative z-50 md:hidden"
          onClose={closeMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out motion-safe:duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in motion-safe:duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" aria-hidden />
          </Transition.Child>

          <div className="fixed inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out motion-safe:duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in motion-safe:duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="flex h-full w-full max-w-xs flex-col bg-[#4101D0] font-bold text-white shadow-2xl">
                <div className="flex justify-end px-6 py-5">
                  <Dialog.Title className="sr-only">Menu</Dialog.Title>
                  <button
                    className="rounded-md p-2 transition-colors hocus:bg-white/10"
                    type="button"
                    aria-label="Fechar menu"
                    onClick={closeMenu}
                  >
                    <XIcon className="h-6 w-6" aria-hidden />
                  </button>
                </div>

                <nav aria-label="Navegação principal">
                  <ul className="flex flex-col gap-1 px-3 [&_a]:block [&_a]:rounded-xl [&_a]:px-4 [&_a]:py-3 [&_a]:transition-colors [&_a]:duration-300 hocus:[&_a]:bg-white/10 hocus:[&_a]:text-[#c49bff]">
                    {links.map(({ href, label }) => (
                      <li key={href}>
                        <a href={href} onClick={closeMenu}>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto flex flex-col gap-3 border-t border-white/15 px-6 py-6 text-sm font-normal">
                  <a
                    className="flex items-center gap-2 transition-colors hocus:text-[#c49bff]"
                    href="tel:31998979774"
                  >
                    <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden />
                    (31) 99897-9774
                  </a>
                  <a
                    className="flex items-center gap-2 transition-colors hocus:text-[#c49bff]"
                    href="mailto:contato@cosmomapeamento.com.br"
                  >
                    <MailIcon className="h-4 w-4 shrink-0" aria-hidden />
                    contato@cosmomapeamento.com.br
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
