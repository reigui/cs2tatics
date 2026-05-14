import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import MapaDetalhe from "./MapaDetalhe";
import PaginaSetor from "./setores/PaginaSetor";
import Layout from "./Layout";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />}/>

          <Route path="/register"element={<Register />}/>

          <Route path="/mapa/:nome" element={<MapaDetalhe />} />

          <Route path="/setores/PaginaSetor/:setorId" element={<PaginaSetor />} />


        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;