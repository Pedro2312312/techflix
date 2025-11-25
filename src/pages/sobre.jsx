import eu from '../images/eu.jpg'
import christian from '../images/Christian.jpg'
import luciano from '../images/Luciano.jpg'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Sobre () {
    return (
        <div>
            <Link to={"/vitrine"} className='voltarvitrine'>Voltar para vitrine</Link>
            <h1>Sobre a Techflix</h1>
            <p>A Techflix foi um projeto onde eu aprendi a usar o js junto ao react e tive muitos pessoais intelectuais em programação, foi inspirado em plataformas de streaming como netflix e disneyplus somados a plataforma da tech4me. - Théo</p>
            <img src={eu} alt="Théo" />
            <p>A Techflix é muito bacana, tem o apoio do Bruno Henrique e do goleiro Bruno. - Christian</p>
            <img src={christian} alt="Christian" />
            <p></p>
            <img src={luciano} alt="Luciano" />
        </div>
    )
}