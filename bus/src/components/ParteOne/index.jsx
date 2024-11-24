
import './index.css';
import VideoBus from '../../assets/busP.mp4';
import Logo from '../../assets/logo.jpg';

function ParteOne() {
    return (
        <>
            <section className="container-fluid container-general-partOne">
                <video className="background-video" src={VideoBus} autoPlay loop muted></video>
                <div className="row background">
                    <div className="texts">
                        <h1>
                            24 anos de <br />
                            <div className='red'>excelência</div> no 
                            transporte de <br />
                            passageiros
                        </h1>
                        <p>Unindo empresas, valorizando pessoas <br />
                            preservando o futuro  
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ParteOne;
