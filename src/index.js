import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductTable from './ProductTable';

const products = [
  {
    Name : 'basket',
    Category : 'clothes',
    Price : '100 TND'
  },

  {
    Name : 'Trousers',
    Category : 'clothes',
    Price : '70 TND'
  },

  {
    Name : 'Watch',
    Category : 'Electronic',
    Price : '250 TND'
  },

  {
    Name : 'Ipad',
    Category : 'Electronic',
    Price : '1000 TND'
  }
];

ReactDOM.render(
  <React.StrictMode>
    <ProductTable products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();



