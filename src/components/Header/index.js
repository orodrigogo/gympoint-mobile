import React from 'react';

import { Container, LogoHeader } from './styles';
import logo from '../../assets/logoheader.png';

export default function Header() {
  return (
    <Container>
      <LogoHeader source={logo} />
    </Container>
  );
}
