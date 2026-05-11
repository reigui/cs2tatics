import { useParams } from "react-router-dom";
import MapaMirageInterativo from "./MapasInterativos/MapaMirageInterativo";
import MapaDustInterativo from "./MapasInterativos/MapaDustInterativo";
import MapaInfernoInterativo from "./MapasInterativos/MapaInfernoInterativo";
import MapaNukeInterativo from "./MapasInterativos/MapaNukeInterativo";
import MapaAncientInterativo from "./MapasInterativos/MapaAncientInterativo";
import MapaAnubisInterativo from "./MapasInterativos/MapaAnubisInterativo";
import MapaTrainInterativo from "./MapasInterativos/MapaTrainInterativo";
import MapaOverpassInterativo from "./MapasInterativos/MapaOverpassInterativo";
import MapaCacheInterativo from "./MapasInterativos/MapaCacheInterativo";
import MapaVertigoInterativo from "./MapasInterativos/MapaVertigoInterativo";


function MapaDetalhe() {
  const { nome } = useParams();

  if (nome === "MIRAGE") {
    return <MapaMirageInterativo />;
  }

  if (nome === "DUST2") {
    return <MapaDustInterativo/>;
  }

  if (nome === "INFERNO") {
    return <MapaInfernoInterativo/>;
  }

  if (nome === "NUKE") {
    return <MapaNukeInterativo/>;
  }
  
  if (nome === "ANCIENT") {
    return <MapaAncientInterativo/>;
  }

  if (nome === "ANUBIS") {
    return <MapaAnubisInterativo/>;
  }

  if (nome === "TRAIN") {
    return <MapaTrainInterativo/>;
  }

  if (nome === "OVERPASS") {
    return <MapaOverpassInterativo/>;
  }

  if (nome === "CACHE") {
    return <MapaCacheInterativo/>;
  }

  if (nome === "VERTIGO") {
    return <MapaVertigoInterativo/>;
  }

}

export default MapaDetalhe;