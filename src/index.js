import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/nav.js'
import Article from './components/article.js'
import Footer from '../src/components/footer.js'
import Blog from './pages/blog.js'
import Div from './pages/divPage.js'
import './index.css';

//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavBar />
      <Article />
      <Footer />
      <Blog />
      <Div />     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Removed for test 31/12/2023
// <Blog />
//<App />
//<Div />
//<Footer />