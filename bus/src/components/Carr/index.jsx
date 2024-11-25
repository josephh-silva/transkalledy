import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import ScrollReveal from 'scrollreveal';

import bus1 from '../../assets/bus1.jpg';
import bus2 from '../../assets/bus2.jpg';
import bus3 from '../../assets/bus3.jpg';
import bus4 from '../../assets/bus4.jpg';
import bus5 from '../../assets/bus5.jpg';
import bus6 from '../../assets/bus6.jpg';
import seat1 from '../../assets/seat1.jpg';
import seat2 from '../../assets/seat2.jpg';
import seat3 from '../../assets/seat3.jpg';
import seat4 from '../../assets/seat4.jpg';
import seat5 from '../../assets/seat5.jpg';
import seat7 from '../../assets/seat7.jpg';
import seat8 from '../../assets/seat8.jpg';
import { useEffect, useState } from 'react';

const imgs = [
    { id: '1', imgbus: bus1 },
    { id: '2', imgbus: bus2 },
    { id: '3', imgbus: bus3 },
    { id: '4', imgbus: bus4 },
    { id: '7', imgbus: seat1},
    { id: '8', imgbus: seat2 },
    { id: '9', imgbus: seat3 },
    { id: '10', imgbus: seat4 },
    { id: '11', imgbus: seat5 },
    { id: '12', imgbus: seat7 },
    { id: '13', imgbus: seat8 }
];

function Carr() {
    const [sliderPrev, setSliderPrev] = useState(1)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSliderPrev(1); // Para telas menores que 1024px, exibe 1 slide
            } else {
                setSliderPrev(3); // Para telas maiores, exibe 3 slides
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

    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.h3-f', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.p-f', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 500
        });
        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []); // O array vazio [] garante que o useEffect rode uma vez após o componente ser montado
                    
    return (
        <>
            <section className='container-fluid container-swiper' id='frot'>
                <div className="front" >
                    <h3 className='h3-f'>Nossa Frota</h3>
                    <div className='p-t'>
                    <p className='p-f'>
                        Na Trankalledy, entendemos que a eficiência, o conforto e a pontualidade são fundamentais quando se trata de transporte. <br />
                        Por isso, nossa frota de ônibus moderna e bem equipada está pronta para oferecer a melhor experiência para sua empresa ou seus colaboradores. <br />
                        Contamos com ônibus de diferentes modelos, todos projetados para atender às suas necessidades específicas. <br /> 
                        Seja para transporte de funcionários, serviços de fretamento, viagens corporativas ou qualquer outra demanda, garantimos uma solução personalizada e adaptada à sua realidade. <br />
                        Nossa frota inclui veículos com ar-condicionado, Wi-Fi gratuito, poltronas confortáveis e sistemas de rastreamento, oferecendo total segurança e comodidade durante todo o trajeto.
                    </p>
                    </div>
                </div>
                <Swiper
                    slidesPerView={sliderPrev}
                    pagination={{ clickable: true }}
                    navigation
                    className='swiper'
                >
                    {imgs.map((img) => (
                        <SwiperSlide key={img.id} className='container-car'>
                            <img
                                src={img.imgbus}
                                alt="onibus"
                                className='img-bus'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}
export default Carr