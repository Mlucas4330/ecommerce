import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const produtos1: string[] = ['Produto', 'Produto', 'Produto'];
const produtos2: string[] = ['Produto', 'Produto', 'Produto', 'Produto', 'Produto', 'Produto'];

function teste() {
    console.log('oi');
}

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <h1>Título</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo molestias dolor commodi ab. Ipsam unde earum
                        quia optio laudantium, nisi veniam reprehenderit aliquam dolore porro ducimus voluptates neque eveniet.
                    </p>
                    <div className="flex">
                        {produtos1.map((item, i) => (
                            <div className="item" key={i}>
                                <p>{item}</p>
                                <button
                                    onClick={() => {
                                        teste();
                                    }}
                                >
                                    Comprar
                                </button>
                                <button>Adicionar ao carrinho</button>
                            </div>
                        ))}
                    </div>

                    <button>Confira os produtos</button>
                </section>
                <section>IMAGEM</section>
                <section>3 IMAGENS</section>
            </main>
            <Footer />
        </>
    );
};
