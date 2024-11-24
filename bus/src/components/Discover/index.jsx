import './index.css'
import Travel from '../../assets/travel.svg'
import Like from '../../assets/like.svg'
import True from '../../assets/true.svg'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
function Discover(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.d-one', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.span-d', {
            duration: 2000,
            distance: '10rem',
            origin: 'top',
            delay: 500
        });
        reveall.reveal('.h3-d', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.p-d', {
            duration: 2000,
            distance: '10rem',
            origin: 'right',
            delay: 500
        });
        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []); // O array vazio [] garante que o useEffect rode uma vez após o componente ser montado
                    
    return(
        <>
        <section className="container-fluid container-d">
            
            <div className="d-two">
                <div className="d-two-one">
                  <span className='span-d'>Por que escolher a Transkalledy?</span>
                  <h3 className='h3-d'>Transkalledy, O melhor do transporte </h3>
                  <p className='p-d'>
                    Escolher nossa empresa de ônibus é garantir uma viagem confortável, segura e pontual. <br />
                    Com uma frota moderna e atendimento de qualidade, oferecemos a melhor experiência a preços acessíveis. <br />
                    Viaje com confiança e tranquilidade!
                  </p>
                </div>
                <div className=" container  d-two-two">
                    <div className="cards">
                    <div className="  card-services card-services-1">
                        <img src={Like} alt="svg" />
                        <span>Serviço confiável</span>
                    </div>
                    <div className="  card-services card-services-2">
                        <img src={True} alt="svg" />
                        <span>Preço Acessivel</span>
                    </div>
                    <div className=" col-4 card-services card-service-3">
                        <img src={Travel} alt="svg" />
                        <span>Viagem segura e confortavel</span>
                    </div> 
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default Discover