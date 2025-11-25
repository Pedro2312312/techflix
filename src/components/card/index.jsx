import { Link } from "react-router-dom";

export default function Card({ id, imagem, nome, valor }) {
  return (
    <Link to={`/filme/${id}`} className="cardfilme">
      <img src={imagem} alt={nome} />

      <div className="info">
        <h2>{nome}</h2>
        <p>{valor}</p>
      </div>
    </Link>
  );
}