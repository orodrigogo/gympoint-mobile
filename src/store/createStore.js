import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  // createEnhancer é a integração do redux com o reactotron
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
