import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../src/components/footer.js'
import Blog from './pages/blog.js'
import Div from './pages/divPage.js'
//import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
      <Blog />
      <Div />
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
