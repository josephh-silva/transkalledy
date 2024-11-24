import './index.css'
import BusI from '../../assets/busIcon.svg'
import Users from '../../assets/users.svg'
import Settings from '../../assets/settings.svg'
import Phone from '../../assets/phone-call.svg'
import Wifi from '../../assets/wifi.svg'
import Like from '../../assets/true.svg'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

function PartThree(){
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.card-1', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        });
        reveall.reveal('.card-2', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });
        reveall.reveal('.card-3', {
            duration: 2000,
            distance: '10rem',
            origin: 'right',
            delay: 500
        });
        reveall.reveal('.card-4', {
            duration: 2000,
            distance: '10rem',
            origin: 'top',
            delay: 500
        });
        reveall.reveal('.card-5', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 500
        });
        reveall.reveal('.card-6', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
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
        <div className="container-fluid container-part-three">
    <div className="row wrap" id='solution'>
        <h1>Soluções abrangentes de transporte</h1>

        
        <div className=" card card-1">
            <div className="img">
                <img src={Users} alt="Imagem do ônibus" />
            </div>
            <p>Equipe Profissional</p>
            
        </div>

        <div className="card card-2">
            <div className="img">
                <img src={BusI} alt="Imagem do ônibus" />
            </div>
            <p>Frota de otima qualidade</p>
            
        </div>

        <div className=" card card-3">
            <div className="img">
                <img src={Phone} alt="Imagem do ônibus" />
            </div>
            <p>Suporte</p>
            
        </div>

        <div className=" card card-4">
            <div className="img">
                <img src={Like} alt="Imagem do ônibus" />
            </div>
            <p>Atendimento profissional</p>
            
        </div>

        <div className=" card card-5">
            <div className="img">
                <img src={Wifi} alt="Imagem do ônibus" />
            </div>
            <p>Atendimento online</p>
            
        </div>

        <div className=" card card-6">
            <div className="img">
                <img src={Settings} alt="Imagem do ônibus" />
            </div>
            <p>Solução para os seus problemas</p>
            
        </div>
    </div>
</div>

        </>
    )
}
export default PartThree