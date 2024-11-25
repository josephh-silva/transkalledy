import { useState } from 'react'
import './index.css'
import Logo from '../../assets/logo-nav.jpg'
import Arrow from '../../assets/arrow-f.svg'
import Map from '../../assets/map.svg'
import Phne from '../../assets/phone-f.svg'
import Email from '../../assets/email.svg'
function Footer() {
    return (


        <section className="container-fluid container-f">
            <div className="one-f">
                <div className="img-logo">
                    <img src={Logo} alt="img" />
                </div>
                <p>O melhor do transporte para você</p>
            </div>
            <div className='linkss'>
                <span>Links Rapidos </span>
                <div className="links-a">
                    <div className="set">
                        <img src={Arrow} alt="" />
                        <a href="#span-one" className="link">Sobre nós</a>
                    </div>
                    <div>
                        <img src={Arrow} alt="" />
                        <a href="#frot" className="link">Frota</a>
                    </div>
                    <div>
                        <img src={Arrow} alt="" />
                        <a href="#solutions" className="link">Soluções</a>
                    </div>
                </div>
            </div>
            <div className="contacts">
                <div className="infos">
                    <div className='box'>
                        <img src={Map} alt="" />
                        <p>
                            Castanheira/Belém, <br />
                            Passagem Jardim Anabiju,
                            Número 80
                        </p>
                    </div>
                    <div className="phone">
                        <img src={Phne} alt="" />
                        <span>(91) 99315-0080</span>
                    </div>
                    <div className="email">
                        <img src={Email} alt="" />
                        <span>contato@transkalledy.com.br</span>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Footer