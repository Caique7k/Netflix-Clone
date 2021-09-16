import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Algumas perguntas frequentes</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Endereço de email" />
        <OptForm.Button>Enviar</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Pronto para assistir? Digite seu e-mail para criar ou reiniciar sua
          assinatura.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
