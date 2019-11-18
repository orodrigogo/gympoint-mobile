import React from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Header from '~/components/Header';

import {
  Container,
  HeaderOrdem,
  Content,
  TypeOrdem,
  TimeOrdem,
  HelpOrdem,
} from './styles';

export default function OrdemDetail({ navigation }) {
  const ordem = navigation.getParam('item');

  const createdAtFormatted = formatRelative(
    parseISO(ordem.createdAt),
    new Date(),
    {
      locale: pt,
    }
  );

  const updatedAtFormatted = formatRelative(
    parseISO(ordem.updatedAt),
    new Date(),
    {
      locale: pt,
    }
  );

  return (
    <>
      <Header />
      <Container>
        <HelpOrdem>
          <HeaderOrdem>
            <TypeOrdem>PERGUNTA</TypeOrdem>
            <TimeOrdem>{createdAtFormatted}</TimeOrdem>
          </HeaderOrdem>
          <Content>{ordem.question}</Content>

          <HeaderOrdem>
            <TypeOrdem>RESPOSTA</TypeOrdem>
            <TimeOrdem>{ordem.answer ? updatedAtFormatted : ''}</TimeOrdem>
          </HeaderOrdem>
          <Content>
            {ordem.answer ? ordem.answer : 'Sem resposta ainda!'}
          </Content>
        </HelpOrdem>
      </Container>
    </>
  );
}
