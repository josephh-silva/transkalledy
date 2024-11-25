import './index.css';
import Police from '../../assets/police.jpg';
import Natura from '../../assets/natura.svg';
import Bio from '../../assets/brasil-bio.jpg';
import Susipe from '../../assets/susipe.png';
import Agro from '../../assets/agropalma.jpg';
import Phosfaz from '../../assets/phosfaz.jpg';
import Fazepa from '../../assets/fasepa.png';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  // Importação correta do CSS para versões recentes do Swiper

const imgP = [
    { id: '1', imagem: Police },
    { id: '2', imagem: Natura },
    { id: '3', imagem: Bio },
    { id: '4', imagem: Susipe },
    { id: '5', imagem: Agro },
    { id: '6', imagem: Phosfaz },
    { id: '7', imagem: Fazepa }
];

function Partnes() {
    const [sliderPrevT, setSliderPrevT] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSliderPrevT(2);  // Para telas menores que 1024px, exibe 1 slide
            } else {
                setSliderPrevT(3);  // Para telas maiores, exibe 3 slides
            }
        };

        // Chama handleResize uma vez ao carregar o componente
        handleResize();

        // Adiciona o event listener para resize
        window.addEventListener('resize', handleResize);

        // Limpa o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="container-fluid container-par" id="partns">
            <h3>Alguns dos nossos parceiros</h3>
            <div className="imgs">
                <Swiper
                    slidesPerView={sliderPrevT}
                    autoplay={{
                        delay: 2000,  // Tempo em milissegundos entre cada slide
                        disableOnInteraction: false,  // Não desativa o autoplay após interação
                    }}
                    className="swiper"
                >
                    {imgP.map((imgP) => (
                        <SwiperSlide key={imgP.id} className="container-car">
                            <img
                                src={imgP.imagem}
                                alt="onibus"
                                className="img-busP"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Partnes;
