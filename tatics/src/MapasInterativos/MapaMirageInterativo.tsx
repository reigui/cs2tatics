import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MapaMirageInterativo = () => {
  const navigate = useNavigate();

  const [setorAtivo, setSetorAtivo] = useState(
    "Passe o mouse ou clique"
  );

  const setores = [
    {
      id: "bombsite-b",
      nome: "Bombsite B",
      pontos:
        "118,59,101,142,37,145,31,139,15,162,19,168,26,300,110,300,110,339,96,350,96,414,394,412,394,299,394,115,206,114,209,42",
    },
    {
      id: "tapete-b",
      nome: "Tapete B",
      pontos:
        "207,42,206,118,399,119,497,120,495,217,843,217,843,32,725,32,725,121,563,122,564,58,400,61,399,44,320,38,313,48",
    },
    {
      id: "moscou-L",
      nome: "L mais Moscou",
      pontos:
        "679,429,583,428,583,370,573,373,574,401,522,402,524,469,489,467,488,339,580,339,581,305,393,299,393,143,488,144,492,222,650,225,652,343,655,379",
    },
    {
      id: "meio-liga",
      nome: "Meio / Liga",
      pontos:
        "864,426,862,632,751,630,751,586,688,585,687,594,702,594,701,638,724,638,721,732,614,729,614,598,643,597,642,588,530,585,530,430",
    },
    {
      id: "carroça",
      nome: "Carroça",
      pontos: "931,354,1051,353,1052,630,862,632,867,430,932,400",
    },
    {
      id: "base-tr",
      nome: "Base TR",
      pontos:
        "1020,344,929,345,924,273,957,273,957,254,932,253,932,232,960,226,951,144,926,144,924,107,963,100,1214,99,1256,111,1258,152,1328,154,1330,294,1350,297,1350,462,1337,487,1337,651,1229,646,1230,280,1233,250,1212,248,1212,219,1183,190,1049,190,1018,219",
    },
    {
      id: "caverna-tr",
      nome: "Caverna TR",
      pontos:
        "1224,648,1342,650,1340,736,1151,735,1151,886,1057,885,1054,773,1062,775,1062,679,1101,684,1104,648",
    },
    {
      id: "palacio-tr",
      nome: "Palácio TR",
      pontos:
        "967,948,1173,953,1171,891,1235,891,1234,1098,883,1097,880,1032,918,1032,919,1055,966,1056",
    },
    {
      id: "bombsite-a",
      nome: "Bombsite A/Jungle",
      pontos:
        "1038,819,1038,887,965,885,965,845,946,844,944,884,903,884,902,934,936,937,936,996,921,999,921,1033,852,1029,854,1106,758,1101,754,1089,621,1157,601,1176,560,1044,622,1036,622,837,593,824,516,824,515,802,495,802,499,826,462,824,465,719,518,717,520,739,568,740,568,758,593,758,597,740,729,739,729,809,826,810,828,776,1038,778",
    },
    {
      id: "base-ct",
      nome: "Base CT/Janelão",
      pontos:
        "558,1039,599,1177,401,1112,373,1106,314,986,224,986,220,888,305,885,320,868,324,564,417,567,418,594,446,592,449,621,471,619,471,596,493,594,493,579,476,575,476,466,526,469,526,715,458,713,447,711,408,711,401,816,441,818,441,860,413,860,418,998,441,1006,442,1039,495,1039",
    },
    {
      id: "mercado-ct",
      nome: "Mercado CT",
      pontos:
        "389,557,112,555,113,414,152,413,152,472,200,470,200,418,287,417,286,442,307,482,388,481",
    },
  ];

  return (
    <>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
          backgroundColor: "#111",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "#111",
            borderRadius: "0",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              color: "white",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Setor: {setorAtivo}
          </h2>

          <div style={{ position: "relative", width: "100%", height: "100%", aspectRatio: 16 / 9 }}>
            <img
              src="/img_mapas/mirage_1920x1080.png"
              alt="Mirage"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
                userSelect: "none",
              }}
            />

          <svg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid meet"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >


          {setores.map((s) => (
              <polygon
                key={s.id}
                points={s.pontos}
                fill="rgba(255,255,0,0.05)"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                style={{
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={() => setSetorAtivo(s.nome)}
                onMouseLeave={() =>
                  setSetorAtivo("Passe o mouse ou clique")
                }
                onClick={() => navigate(`/setores/PaginaSetor/${s.id}`)}
                className="setor-hover"
              />
            ))}
          </svg>
          </div>
        </div>

        <style>{`
          .setor-hover:hover {
            fill: rgba(255, 255, 0, 0.25);
            stroke: #ffee00;
            filter: drop-shadow(0 0 5px #ffee00);
          }

          .button a {
            color: white;
            text-decoration: none;
          }
        `}</style>
      </div>
    </>
  );
};

export default MapaMirageInterativo;