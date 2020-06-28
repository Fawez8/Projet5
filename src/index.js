import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Myproduct from './ProductTable';


const products = [
  {
    Name : 'basket',
    Categoty : 'clothes',
    Price : '100 TND'
  },

  {
    Name : 'Trousers',
    Categoty : 'clothes',
    Price : '70 TND'
  },

  {
    Name : 'Watch',
    Categoty : 'Electronic',
    Price : '250 TND'
  },

  {
    Name : 'Ipad',
    Categoty : 'Electronic',
    Price : '1000 TND'
  }
];


ReactDOM.render(
  <React.StrictMode>
    <Myproduct products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();



