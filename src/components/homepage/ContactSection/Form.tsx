import type { FC } from 'react';

export const Form: FC = () => {
  // TODO: Send form to the owner's email
  function handleSubmit() {}

  return (
    <form
      className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-8"
      aria-labelledby="form-title"
      onSubmit={handleSubmit}
    >
      <h3
        className="m-0 p-0 font-secondary text-title-sm font-bold normal-case leading-normal tracking-normal"
        id="form-title"
      >
        Se preferir, preencha o formulário abaixo e solicite um orçamento:
      </h3>

      <div className="flex flex-col gap-2 self-stretch [&_input]:w-full [&_input]:border-b-2 [&_input]:border-solid [&_input]:border-primary-400 [&_input]:bg-transparent [&_input]:px-6 [&_input]:py-1 [&_textarea]:min-h-[7.5rem] [&_textarea]:w-full [&_textarea]:px-6 [&_textarea]:py-2 [&_textarea]:text-primary-700 [&_::placeholder]:text-inherit [&_::placeholder]:opacity-60">
        <div>
          <label htmlFor="name" className="sr-only">
            Nome
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nome:"
            required
          />
        </div>
        <div>
          <label htmlFor="institution" className="sr-only">
            Instituição (opcional)
          </label>
          <input
            id="institution"
            type="text"
            name="institution"
            placeholder="Instituição (opcional):"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email:"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Telefone (opcional)
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Telefone (opcional):"
          />
        </div>
        {/* Display grid is used to remove the gap below the `textarea` */}
        <div className="grid">
          <label htmlFor="description" className="sr-only">
            Breve descrição do seu projeto (opcional)
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Breve descrição do seu projeto (opcional):"
          />
        </div>
      </div>

      <button
        className="w-60 bg-primary-800 px-10 py-6 transition-opacity hocus:opacity-60"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};
