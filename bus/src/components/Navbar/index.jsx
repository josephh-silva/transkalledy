import './index.css'
function Navbar() {
    /*
    <div className=" links">
                        <a href="" className="links">Sobre nós</a>
                        <a href="" className="links">Frota</a>
                        <a href="" className="links">Soluçoes</a>
                    </div>
                    <div className=" wht">

                        <button class="custom-btn btn-16" onClick={() => window.open(
                            'https://wa.me/5591993150080', '_blank')}>
                            Atendimento
                        </button>

                    </div> */
    return (
        <>
            <section className="container-fluid container-nav">
                   <div className="logo"></div>
                    <div className=" links">
                        <a href="" className="links">Sobre nós</a>
                        <a href="" className="links">Frota</a>
                        <a href="" className="links">Soluçoes</a>
                    </div>
                    <div className=" wht">

                    <button class="custom-btn btn-16" onClick={() => window.open(
                        'https://wa.me/5591993150080', '_blank')}>
                        Atendimento
                    </button>

</div>
            </section>
        </>
    )
}
export default Navbar