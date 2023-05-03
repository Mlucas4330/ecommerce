import { Link } from 'react-router-dom';
import { Footer } from '../../../components/Footer/Footer';
import { Header } from '../../../components/Header/Header';
import './Products.css';

const produtos: string[] = ['Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto'];

function goToProduct(index: number) {
    console.log(index);
}

export const Products = () => {
    return (
        <>
            <Header />
            <main>
                <div className="products">
                    {produtos.map((item, i) => (
                        <Link to={`/product/${i}`}>
                            <div key={i}>
                                <div className="img"></div>
                                <h2 className="text-center">{item}</h2>
                                <h3 className="text-center preco">R$ 10,00</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};
