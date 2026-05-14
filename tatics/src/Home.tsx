import { Link } from "react-router-dom";
import bannerMirage from "./assets/banner_mapas/banner_mirage.png";

type Mapa = {
  nome: string;
  descricao: string;
  imagem: string;
};

const mapas: Mapa[] = [
  { nome: "MIRAGE", descricao: "Descrição do mapa 1", imagem: bannerMirage },
  { nome: "DUST2", descricao: "Descrição do mapa 2", imagem: "" },
  { nome: "INFERNO", descricao: "Descrição do mapa 3", imagem: "" },
  { nome: "NUKE", descricao: "Descrição do mapa 4", imagem: "" },
  { nome: "ANCIENT", descricao: "Descrição do mapa 5", imagem: "" },
  { nome: "ANUBIS", descricao: "Descrição do mapa 6", imagem: "" },
  { nome: "TRAIN", descricao: "Descrição do mapa 7", imagem: "" },
  { nome: "OVERPASS", descricao: "Descrição do mapa 8", imagem: "" },
];

const mapasExtras: Mapa[] = [
  { nome: "CACHE", descricao: "Mapa extra 1", imagem: "" },
  { nome: "COBBLESTONE", descricao: "Mapa extra 2", imagem: "" },
  { nome: "VERTIGO", descricao: "Mapa extra 3", imagem: "" },
  { nome: "OFFICE", descricao: "Mapa extra 4", imagem: "" },
  { nome: "ITALY", descricao: "Mapa extra 5", imagem: "" },
];

function Home() {
  return (
    <>
      <main>
        <section className="hotbar">
          <ul className="hotbar_list">
            <li>HOME</li>
            <li>UTILITARIAS</li>
            <li>TÁTICAS</li>
            <li>CONTATO</li>
          </ul>
        </section>

        <section className="card_principal">
          <div className="texto_principal">
            <h1>Bem-vindo ao CS2TATICS</h1>
            <h2>
              Neste site disponibilizaremos vídeos explicativos de todas as utilitárias
              com o intuito de aprendizado
            </h2>
          </div>

          <ul className="redesocial">
            <li>DISCORD</li>
            <li>INSTAGRAM</li>
            <li>GMAIL</li>
          </ul>
        </section>

        <section className="grid">
            {mapas.map((mapa) => (
            <Link to={`/mapa/${mapa.nome}`} key={mapa.nome}>
              <div className="card">
                <h2>{mapa.nome}</h2>
                <img src={mapa.imagem} alt={mapa.nome} />
                <p>{mapa.descricao}</p>
              </div>
              </Link>
          ))}
        </section>

        <section className="grid_extra">
          {mapasExtras.map((mapa) => (
            <div className="card_extra" key={mapa.nome}>
              <img src={mapa.imagem} alt={mapa.nome} />
            </div>
          ))}
        </section>

        {/* GRID GUIAS */}
         <section className="grid_guias"> 
            <h1 className="titulo">Guias</h1>
              <div className="grid_cards">Ola</div>
              <div className="grid_cards">Ola</div> 
              <div className="grid_cards">Ola</div> 
              <div className="grid_cards">Ola</div> 
              <div className="grid_cards">Ola</div> 
              <div className="grid_cards">Ola</div> 
              <div className="grid_cards">Ola</div> 
              <div className="grid_cards">Ola</div> 
          </section> 
          
        {/* GRID GRANADAS POPULARES */} 
        <section className="grid_guias"> 
          <h1 className="titulo">Granadas Populares</h1> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
        </section> 
        
        {/* GRID GRANADAS DA COMUNIDADE */} 
        <section className="grid_guias"> 
          <h1 className="titulo">Granadas da Comunidade</h1> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
          <div className="grid_cards">Ola</div> 
        </section>
      </main>

      <footer>
        <p>© 2026 CS2TATICS</p>
      </footer>
    </>
  );
}

export default Home; 