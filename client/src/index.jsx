import React from 'react';
import ReactDOM from 'react-dom';
import ColourPreview from './components/philipService/client/productPage/components/ColourPreview';
import MoreStyles from './components/johnService/client/src/index';
import Reviews from './components/javService/client/src/index';

const pathArray = window.location.pathname.split('/');
const productId = pathArray[pathArray.length - 2];

ReactDOM.render(<ColourPreview productId={productId} />, document.getElementById('philipApp'));
