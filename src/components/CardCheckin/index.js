import React from 'react';

import { Container, CheckinId, CheckinTime } from './styles';

export default function CardCheckin({data}) {
  return (
    <Container>
      <CheckinId>{`Check-in #${data.id}`}</CheckinId>
      <CheckinTime>Hoje às 14h</CheckinTime>
    </Container>
  );
}
