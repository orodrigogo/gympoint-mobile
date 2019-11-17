import React from 'react';

import createRouter from './routes';

export default function App() {
  const Routes = createRouter(true);
  return <Routes />;
}
