//import logo from '../logo.svg';
//import logo from './Images/favicon.ico'
//import Home from './pages/home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Nav.js'
import Home from '../src/pages/home.js'
import Blog from '../src/pages/blog.js'
import Div from '../src/pages/divPage.js'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/div' component={Div} />
        </Routes>
      </Router>
    <Home />
    </>
  );
}

export default App;
