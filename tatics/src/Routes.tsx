import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import MapaMirageInterativo from "./MapasInterativos/MapaMirageInterativo";
import PaginaSetor from "./setores/PaginaSetor";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<Login />}/>

        <Route path="/register"element={<Register />}/>

        <Route path="/mapa/mirage"element={<MapaMirageInterativo />}/>

        <Route path="/mapa/mirage/:setor"element={<PaginaSetor />}/>


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;