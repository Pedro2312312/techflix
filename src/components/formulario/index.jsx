import CampoTexto from "../campoTexto"
import {useState} from "react"
import { Link } from "react-router-dom"
import "./index.css"
const Formulario = () => {
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const aoSalvar = (evento) => {
        evento.preventDefault()
        setNome('')
        setEmail('')
    }

    return(
        <div className="formulario">
            <form onSubmit={aoSalvar}>
            <CampoTexto rotulo="Nome: " placeholder="Digite seu nome" valor={nome} aoAlterar={valor => setNome(valor)}/>
            <CampoTexto rotulo="E-mail: " placeholder="Digite seu e-mail" valor={email} aoAlterar={valor => setEmail(valor)}/>
            <button type="submit"><Link to='/vitrine'>Enviar</Link></button>
            </form>
        </div>

    )
}
export default Formulario