import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

function App() {
  return (
      <div className="App col-md-8 py-5 px-3 mx-auto bg-light">
        <header className="pb-3 mb-3 border-bottom">
          <nav className="navbar navbar-expand-lg bg-light">
            <a className="navbar-brand" href="/">eCommerce Frontend</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link">Productos</Link>
                </li>
              </ul>
            </div>
            <NavLink to="/carrito">
              <i className="bi bi-cart"></i>
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="productos" element={<Products/>} />
          <Route path="carrito" element={<Cart/>} />
        </Routes>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">© 2022 Nelson Gabriel Hernández</span>
          </div>
        </footer>
      </div>
  );
}

export default App;
