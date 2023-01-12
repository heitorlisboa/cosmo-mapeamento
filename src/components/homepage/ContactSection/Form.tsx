import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Email from '@emailjs/browser';

type RequestQuoteFormFields = {
  name: string;
  institution?: string;
  email: string;
  phone?: string;
  description?: string;
};

export const Form: FC = () => {
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const { register, handleSubmit } = useForm<RequestQuoteFormFields>();

  async function handleRequestQuote(data: RequestQuoteFormFields) {
    setIsSendingRequest(true);

    const valueNotInformed = 'Não informado';
    try {
      await Email.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE,
        {
          name: data.name,
          institution: data.institution || valueNotInformed,
          email: data.email,
          phone: data.phone || valueNotInformed,
          description: data.description || valueNotInformed,
        } satisfies Required<RequestQuoteFormFields>,
        import.meta.env.PUBLIC_EMAILJS_API_KEY
      );

      window.alert('Solicitação de orçamento enviada com sucesso!');
    } catch (error) {
      window.alert('Não foi possível enviar a solicitação...');
    }

    setIsSendingRequest(false);
  }

  return (
    <form
      className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-8"
      aria-labelledby="form-title"
      onSubmit={handleSubmit(handleRequestQuote)}
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
            placeholder="Nome:"
            required
            {...register('name')}
          />
        </div>
        <div>
          <label htmlFor="institution" className="sr-only">
            Instituição (opcional)
          </label>
          <input
            id="institution"
            type="text"
            placeholder="Instituição (opcional):"
            {...register('institution')}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email:"
            required
            {...register('email')}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Telefone (opcional)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Telefone (opcional):"
            {...register('phone')}
          />
        </div>
        {/* Display grid is used to remove the gap below the `textarea` */}
        <div className="grid">
          <label htmlFor="description" className="sr-only">
            Breve descrição do seu projeto (opcional)
          </label>
          <textarea
            id="description"
            placeholder="Breve descrição do seu projeto (opcional):"
            {...register('description')}
          />
        </div>
      </div>

      <button
        className="w-60 bg-primary-800 px-10 py-6 transition-opacity hocus:opacity-60"
        type="submit"
        aria-live="polite"
      >
        {isSendingRequest ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};
