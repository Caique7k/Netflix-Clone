import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Dúvidas? Contate conosco</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Relações com Investidores</Footer.Link>
          <Footer.Link href="#">Maneiras de Assistir</Footer.Link>
          <Footer.Link href="#">Informação Corporativa</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Central de ajuda</Footer.Link>
          <Footer.Link href="#">Empregos</Footer.Link>
          <Footer.Link href="#">Termos de uso</Footer.Link>
          <Footer.Link href="#">Entre em contato</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Conta</Footer.Link>
          <Footer.Link href="#">Resgatar vales-presente</Footer.Link>
          <Footer.Link href="#">Privacidade</Footer.Link>
          <Footer.Link href="#">Teste rápido</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Central de media</Footer.Link>
          <Footer.Link href="#">Comprar vale-presentes</Footer.Link>
          <Footer.Link href="#">Preferências de cookies</Footer.Link>
          <Footer.Link href="#">Noticias</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Brasil </Footer.Text>
    </Footer>
  );
}
