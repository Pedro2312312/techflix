import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Detalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/filmes/${id}`)
      .then(res => res.json())
      .then(data => setFilme(data));
  }, [id]);

  if (!filme) return <h1>Carregando...</h1>;

  return (
      <div className="detalhescontainer">
        <Link to={'/vitrine'} className="btnvoltarvitrine">Voltar para vitrine</Link>
      <img src={filme.imagem} alt={filme.nome} className="imgDetalhes" />
      <h1 className="h1Detalhes">{filme.nome}</h1>
<button onClick={() => alert("Filme alugado com sucesso!")} className="btnValor">{filme.valor} R$</button>
      <p className="pDetalhes">{filme.descricao}</p>
    </div>
  );
}
