import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ icon, ...rest }, ref) {
  return (
    <Container>
      {icon && <Icon name={icon} size={20} color="#ee4e62" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}
export default forwardRef(Input);
