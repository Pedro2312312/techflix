import Formulario from "../components/formulario"
import logo from "../images/Logo.png"
export default function Home () {
  return (
    <div className="containerPaginaInicial">
        <img src={logo} alt="Logo Techflix" className="logoPaginaInicial"/>
        <h1>Bem vindo à Techflix! o melhor site de streaming da atualidade</h1>
        <p>faça seu cadastro abaixo:</p>
        <Formulario/>
    </div>
  )
}