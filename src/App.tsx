import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './assets/pages/Home/Home';
import { Products } from './assets/pages/Products/Products';
import { Product } from './assets/pages/Product/Product';
import { Login } from './assets/pages/Login/Login';
import { Register } from './assets/pages/Register/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
