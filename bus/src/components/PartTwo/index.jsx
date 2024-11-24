import { useEffect } from 'react';
import './index.css'
import ScrollReveal from 'scrollreveal';
function PartTwo(){

    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.span', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.h1', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 1500
        });
        reveall.reveal('.about-two', {
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
            <section className="container about">
                <div className="about-one" id='span-one'>
                    <span className='span' >Sobre Nós</span>
                    <h1 className='h1'>
                    Há mais de 15 anos <br />
                    <div>oferecemos serviço</div> de fretamento de ônibus <br />
                    para você
                    </h1>
                </div>
                <div className="about-two"></div>
            </section>
        </>
    )
}
export default PartTwo