import React from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Header, Status, Time, Content } from './styles';

export default function CardOrdem({ data, ...rest }) {
  const dataFormatted = formatRelative(parseISO(data.updatedAt), new Date(), {
    locale: pt,
  });

  return (
    <Container {...rest}>
      <Header>
        <Status answer={data.answer}>
          {data.answer ? 'Respondido' : 'Sem resposta'}
        </Status>
        <Time>{dataFormatted}</Time>
      </Header>
      <Content>{data.question}</Content>
    </Container>
  );
}
