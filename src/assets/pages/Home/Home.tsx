import { Footer } from '../../../components/Footer/Footer';
import { Header } from '../../../components/Header/Header';
import './Home.css';

const produtos1: string[] = ['Produto', 'Produto', 'Produto'];

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <h1 className="text-center tittle">Título</h1>
                    <p className="text-center text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo molestias dolor commodi ab. Ipsam unde earum
                        quia optio laudantium, nisi veniam reprehenderit aliquam dolore porro ducimus voluptates neque eveniet.
                    </p>
                    <div className="products">
                        {produtos1.map((item, i) => (
                            <div className="item" key={i}>
                                <div className="img"></div>
                                <p className="text-center">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button>Confira os produtos</button>
                    </div>
                </section>
                <section>IMAGEM</section>
                <section>3 IMAGENS</section>
            </main>
            <Footer />
        </>
    );
};
