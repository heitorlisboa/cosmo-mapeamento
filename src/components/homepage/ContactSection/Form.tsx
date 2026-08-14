import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Email from '@emailjs/browser';

type RequestQuoteFormFields = {
  name: string;
  institution: string;
  email: string;
  phone: string;
  description: string;
};

export const Form: FC = () => {
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const { register, handleSubmit } = useForm<RequestQuoteFormFields>();

  async function handleRequestQuote(data: RequestQuoteFormFields) {
    setIsSendingRequest(true);

    try {
      await Email.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE,
        {
          name: data.name,
          institution: data.institution,
          email: data.email,
          phone: data.phone,
          description: data.description,
        } satisfies Required<RequestQuoteFormFields>,
        import.meta.env.PUBLIC_EMAILJS_API_KEY
      );

      window.alert('Solicitação de orçamento enviada com sucesso!');
    } catch {
      window.alert('Não foi possível enviar a solicitação...');
    }

    setIsSendingRequest(false);
  }

  return (
    <form
      className="flex flex-col gap-6"
      aria-labelledby="form-title"
      onSubmit={handleSubmit(handleRequestQuote)}
    >
      <p
        className="m-0 text-balance text-center font-bold leading-snug"
        id="form-title"
      >
        Se preferir, preencha o formulário abaixo e solicite um orçamento:
      </p>

      <div className="flex flex-col gap-3 [&_::placeholder]:text-white/55 [&_:is(input,textarea)]:w-full [&_:is(input,textarea)]:border [&_:is(input,textarea)]:border-white/25 [&_:is(input,textarea)]:bg-white/5 [&_:is(input,textarea)]:px-4 [&_:is(input,textarea)]:py-2.5 [&_:is(input,textarea)]:text-[0.9375rem] [&_:is(input,textarea)]:text-white [&_textarea]:min-h-[7.5rem]">
        <div>
          <label htmlFor="name" className="sr-only">
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nome:"
            required
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="institution" className="sr-only">
            Instituição
          </label>
          <input
            id="institution"
            type="text"
            placeholder="Instituição:"
            required
            {...register('institution', { required: true })}
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
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Telefone:"
            required
            {...register('phone', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="description" className="sr-only">
            Breve descrição do seu projeto
          </label>
          <textarea
            id="description"
            placeholder="Breve descrição do seu projeto:"
            required
            {...register('description', { required: true })}
          />
        </div>
      </div>

      <button
        className="self-start bg-primary-800 px-8 py-3 font-title text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hocus:opacity-60"
        type="submit"
        aria-live="polite"
      >
        {isSendingRequest ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};
