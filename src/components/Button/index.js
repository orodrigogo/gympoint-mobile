import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, TextButton } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <TextButton>{children}</TextButton>
      )}
    </Container>
  );
}
