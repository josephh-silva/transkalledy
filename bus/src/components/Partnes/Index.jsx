import './index.css'
import Police from '../../assets/police.jpg'
import Natura from '../../assets/natura.svg'
import Bio from '../../assets/brasil-bio.jpg'
import Agro from '../../assets/agropalma.jpg'

import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react'
function Partnes(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.one', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.two', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 1500
        });
        reveall.reveal('.three', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 2000
        });
        reveall.reveal('.four', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 2500
        });

        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []); // O array vazio [] garante que o useEffect rode uma vez após o componente ser montado

    return(
        <section className="container-fluid container-par">
            <h3>Alguns dos nossos parceiros</h3>
            <div className="imgs">
                <div className="partness one" >
                    <img src={Police} alt="partnes"  />
                </div>
                <div className="partness two" >
                    <img src={Natura} alt="partnes"  />
                </div>
                <div className="partness three" >
                    <img src={Bio} alt="partnes"  />
                </div>
                <div className="partness four" >
                    <img src={Agro} alt="partnes"  />
                </div>
            </div>
        </section>
    )
}
export default Partnes