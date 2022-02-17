// React functions and types
import { forwardRef } from "react";
import type { SectionParentProps } from "../../../types";

// Styles
import styles from "./ContactSection.module.scss";

// Components
import Section from "../../Section";
import Title from "../../Title";
import Socials from "./Socials";
import Info from "./Info";

const ContactSection = forwardRef<HTMLElement, SectionParentProps>(
  function ContactSectionComponent({ id }, ref) {
    // TODO: Fazer com que o formulário seja enviado para o e-mail
    function handleSubmit() {}

    return (
      <Section ref={ref} className={styles.section} id={id}>
        <Title className={styles.section__title} color="white">
          <strong>Contato</strong>
        </Title>

        <Socials />
        <Info />

        <form
          className={styles.form}
          aria-labelledby="form-title"
          onSubmit={handleSubmit}
        >
          <h4 className={styles.form__title} id="form-title">
            Se preferir, preencha o formulário abaixo e solicite um orçamento:
          </h4>
          <input
            type="text"
            name="name"
            placeholder="Nome:"
            aria-label="Nome:"
            required
          />
          <input
            type="text"
            name="institution"
            placeholder="Instituição:"
            aria-label="Instituição:"
          />
          <input
            type="email"
            name="email"
            placeholder="Email:"
            aria-label="Email:"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefone:"
            aria-label="Telefone:"
          />
          <textarea
            name="description"
            placeholder="Breve descrição do seu projeto"
            aria-label="Breve descrição do seu projeto"
          />
          <button type="submit">Enviar</button>
        </form>
      </Section>
    );
  }
);

export default ContactSection;
