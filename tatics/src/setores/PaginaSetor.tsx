// src/paginas/setores/PaginaSetor.tsx

import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./setor.css";

const PaginaSetor = () => {
  const { setor } = useParams();

  const navigate = useNavigate();

  return (
    <div className="pagina-setor">

      <header>
        <div className="cabecalho">
          <h1>CS2TATICS</h1>

          <div className="pesquisa">
            <input type="text" placeholder="Pesquise o Mapa ou Utilitária" />
          </div>

          <div className="botoes">
            <button className="button">
              <Link to="/login">Entrar</Link>
            </button>
            <button className="button">
              <Link to="/Register">Registrar</Link>
            </button>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}

      <div className="conteudo">

        {/* SIDEBAR */}

        <aside className="sidebar">

          <div className="filtro">

            <h3>POSIÇÃO</h3>

            <input type="text" />

          </div>

          <div className="filtro">

            <h3>LADO DE TIME</h3>

            <button>CONTRA TERRORISTA</button>
            <button>TERRORISTA</button>
            <button>AMBOS</button>

          </div>

          <div className="filtro">

            <h3>FILTRAGEM GRANADAS</h3>

            <button>SMOKES</button>
            <button>MOLOTOVS</button>
            <button>HE GRANADAS</button>
            <button>FLASHBANGS</button>

          </div>

          <button className="btn-mapa">
            SELECIONAR OUTRO MAPA
          </button>

        </aside>

        {/* ÁREA PRINCIPAL */}

        <main className="area-principal">

          <button
            className="voltar"
            onClick={() => navigate(-1)}
          >
            ← VOLTAR
          </button>

          {/* PRIMEIRO SETOR */}

          <section>

            <h1>{setor?.toUpperCase()}</h1>

            <div className="grid-cards">

              <div className="card"></div>

              <div className="card"></div>

              <div className="card"></div>

            </div>

          </section>

          {/* SEGUNDO SETOR */}

          <section>

            <h1>PORTA MERCADO</h1>

            <div className="grid-cards">

              <div className="card"></div>

              <div className="card"></div>

              <div className="card"></div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
};

export default PaginaSetor;