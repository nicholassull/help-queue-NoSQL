import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
// import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

//Instantiates the redux store using our ticket reducer.
const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  //Wrapping App in Provider allows all children of App access to the redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


