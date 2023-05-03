import { Link } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <div className="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/blog">Blog</Link>
                </div>
            </nav>
            <span className='logo'>Logo</span>
            <div className="car_button">
                <button>Carrinho</button>
                <button>Logar</button>
            </div>
        </header>
    );
};
