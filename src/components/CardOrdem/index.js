import React from 'react';

import { Container, Header, Status, Time, Content } from './styles';

export default function CardOrdem() {
  return (
    <Container>
      <Header>
        <Status answer={false}>Sem resposta</Status>
        <Time>Hoje às 14h</Time>
      </Header>
      <Content>
        Olá pessoal da academia, gostaria de saber se quando acordar devo
        ingerir batata doce e frango logo de primeira, preparar as...
      </Content>
    </Container>
  );
}
