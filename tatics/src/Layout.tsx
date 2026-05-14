import { Link } from "react-router-dom";
import "./index.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
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
              <Link to="/register">Registrar</Link>
            </button>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export default Layout;