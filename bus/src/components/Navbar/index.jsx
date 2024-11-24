import './index.css'
function Navbar() {
    return (
        <>
            <section className="container-fluid container-nav">
                <div className="logo"></div>
                <div className=" links">
                    <a href="#span-one" className="links">Sobre nós</a>
                    <a href="#frot" className="links">Frota</a>
                    <a href="#solution" className="links">Soluçoes</a>
                    <a href="#partns" className="links">Parceiros</a>
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