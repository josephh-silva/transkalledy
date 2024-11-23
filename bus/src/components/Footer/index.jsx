import { useState } from 'react'
import './index.css'
function Footer() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [desc, setDesc] = useState("")

    return (

        <>
            <section className="container-fluid container-f">
                <div className="one-f">

                </div>
                <div className="form">
                    <form >
                        <p>Contato</p>
                        <div className="inputs">
                            <input
                                type="text"
                                id='name'
                                placeholder='Seu Nome'
                                onChange={(ev) => setName(ev.target.value)}
                                value={name} />
                        </div>
                        <div className="inputs">
                            <input
                                type="text"
                                id='email'
                                placeholder='Seu Email'
                                onChange={(ev) => setEmail(ev.target.value)}
                                value={email} />
                        </div>
                        <div className="inputs">
                            <textarea
                                name="desc"
                                id="desc"
                                placeholder='Sua Duvida'
                                onChange={(ev) => setDesc(ev.target.value)}
                                value={desc}
                            ></textarea>
                        </div>
                        <button>Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Footer