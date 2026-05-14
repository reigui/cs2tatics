import { useState } from "react";
import { Link } from "react-router-dom";

const MapaCacheInterativo = () => {
  const [setorAtivo, setSetorAtivo] = useState("Passe o mouse ou clique");

  const setores = [
    {
      id: "", nome: "", pontos:"",
    },
    {
      id: "", nome: "", pontos:"",
    },
    {
      id: "", nome: "", pontos:"",
    },
    {
      id: "", nome: "", pontos:"",
    },
    {
      id: "", nome: "", pontos:"",
    },
    {
      id: "", nome: "", pontos:"",
    },

];

    return (
    <>
    {/* MAPA */}
      <div
        style={{
          position: "relative",
          width: "900px",
          maxWidth: "100%",
          margin: "20px auto",
          backgroundColor: "#111",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "white", textAlign: "center" }}>
          Setor: {setorAtivo}
        </h2>

        <img
          src="/img_mapas/cache_1920x1080.png"
          alt="Cache"
          style={{ width: "100%" }}
        />

        <svg
          viewBox="0 0 1390 1200"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {setores.map((s) => (
            <polygon
              key={s.id}
              points={s.pontos}
              fill="transparent"
              stroke="white"
              strokeWidth="1"
              style={{ cursor: "pointer", transition: "0.2s" }}
              onMouseEnter={() => setSetorAtivo(s.nome)}
              onMouseLeave={() =>
                setSetorAtivo("Passe o mouse ou clique")
              }
              onClick={() => alert(`Ação no setor: ${s.nome}`)}
              className="setor-hover"
            />
          ))}
        </svg>

        <style>{`
          .setor-hover:hover {
            fill: rgba(255, 251, 2, 0.2);
            stroke: yellow;
            stroke-width: 3px;
          }
        `}</style>
      </div>
    </>
);

};

export default MapaCacheInterativo;