export default function Card({ imagem, nome, valor }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />

      <div className="info">
        <h2>{nome}</h2>
        <p>{valor}</p>
      </div>
    </div>
  );
}