import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/@domain/models/root.saga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);


export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

export type AppStore = typeof store;
