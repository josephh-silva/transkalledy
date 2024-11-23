import { useEffect } from 'react';
import './index.css'
import ScrollReveal from 'scrollreveal';
function StarLink(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.star-two', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.pp', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 1500
        });

        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []); 
    return(
        <>
        <section className="container-fluid container-star">
            <div className="star-one">
                
                <p className='pp'>
                Agora, a Starlink está disponível em nossa frota de ônibus! Isso significa que, <br />
                enquanto você viaja, pode ter acesso à internet de alta velocidade diretamente no seu assento. <br />
                Seja para trabalhar, assistir vídeos ou se conectar com amigos, você estará sempre online durante a viagem. <br />
                 A Starlink traz a internet via <br />
                  satélite para garantir que sua conexão seja rápida e estável, mesmo em movimento.
                </p>
            </div>
            <div className="star-two">

            </div>
        </section>
        </>
    )
}
export default StarLink