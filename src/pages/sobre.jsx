import eu from '../images/eu.jpg'
import christian from '../images/Christian.jpg'
import luciano from '../images/Luciano.jpg'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Sobre () {
    return (
        <div className="sobre-container">
            <Link to={"/vitrine"} className='btnvoltarvitrine'>Voltar para vitrine</Link>
            <h1>Sobre a Techflix</h1>

            <div className="cards-sobre">

                <div className="card-sobre">
                    <img className="img-theo" src={eu} alt="Théo" />
                    <p>Techflix foi um projeto onde aprendi muito sobre js e react. - Théo</p>
                </div>

                <div className="card-sobre">
                    <img src={christian} alt="Christian" />
                    <p>A Techflix é muito bacana, tem o apoio do Bruno Henrique. - Christian</p>
                </div>

                <div className="card-sobre">
                    <img src={luciano} alt="Luciano" />
                    <p>A Techflix virou minha plataforma favorita. - Luciano</p>
                </div>

            </div>
        </div>
    )
}