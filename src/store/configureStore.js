import { createStore } from 'redux';
import reducer from '../reducers';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

const update = () => {
  localStorage.setItem('filling-form-3F', JSON.stringify(store.getState()));
};

store.subscribe(update);
