import React from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, CheckinId, CheckinTime } from './styles';

export default function CardCheckin({ data }) {
  const dataFormatted = formatRelative(parseISO(data.createdAt), new Date(), {
    locale: pt,
  });

  return (
    <Container>
      <CheckinId>{`Check-in #${data.id}`}</CheckinId>
      <CheckinTime>{dataFormatted}</CheckinTime>
    </Container>
  );
}
