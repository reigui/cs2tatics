import { useParams } from "react-router-dom";

const PaginaSetor = () => {
  const { setorId } = useParams();

  const conteudos: Record<
    string,
    {
      titulo: string;
      mapa: string;
      id: string;
      secoes: string[];
    }
  > = {

    // MIRAGE
    "bombsite-b": {
      titulo: "BOMBSITE B",
      mapa: "Mirage",
      id: "bombsite-b",
      secoes: ["JANELA MERCADO", "PORTA MERCADO", "DEFAULT", "FOREST", "VAN", "SOL", "SOMBRA"],
    },
    "bombsite-a": {
      titulo: "BOMBSITE A/JUNGLE",
      mapa: "Mirage",
      id: "bombsite-a",
      secoes: ["TICKET", "PALACIO"],
    },
    "tapete-b": {
      titulo: "TAPETE B",
      mapa: "Mirage",
      id: "tapete-b",
      secoes: [],
    },
    "moscou-L": {
      titulo: "L MAIS MOSCOU",
      mapa: "Mirage",
      id: "moscou-L",
      secoes: [],
    },
    "meio-liga": {
      titulo: "MEIO / LIGA",
      mapa: "Mirage",
      id: "meio-liga",
      secoes: ["X1", "JANELA"],
    },
    "carroça": {
      titulo: "CARROÇA",
      mapa: "Mirage",
      id: "carroça",
      secoes: [],
    },
    "base-tr": {
      titulo: "BASE TR",
      mapa: "Mirage",
      id: "base-tr",
      secoes: [],
    },
    "caverna-tr": {
      titulo: "CAVERNA TR",
      mapa: "Mirage",
      id: "caverna-tr",
      secoes: [],
    },
    "palacio-tr": {
      titulo: "PALÁCIO TR",
      mapa: "Mirage",
      id: "palacio-tr",
      secoes: [],
    },
    "base-ct": {
      titulo: "BASE CT/JANELÃO",
      mapa: "Mirage",
      id: "base-ct",
      secoes: [],
    },
    "mercado-ct": {
      titulo: "MERCADO CT",
      mapa: "Mirage",
      id: "mercado-ct",
      secoes: [],
    },
    

    
    // DUST 2
    "bombsite-b-dust": {
      titulo: "BOMB B",
      mapa: "Dust 2",
      id: "bombsite-b",
      secoes: [],
    },
    "bombsite-a-dust": {
      titulo: "BOMB A",
      mapa: "Dust 2",
      id: "bombsite-a",
      secoes: [],
    },
    "escuro-cima-baixo": {
      titulo: "ESCURO - CIMA/BAIXO",
      mapa: "Dust 2",
      id: "escuro-cima-baixo",
      secoes: [],
    },
    "meio-varanda": {
      titulo: "MEIO - VARANDA",
      mapa: "Dust 2",
      id: "meio-varanda",
      secoes: [],
    },
    "base-tr-b": {
      titulo: "BASE - TR B",
      mapa: "Dust 2",
      id: "base-tr-b",
      secoes: [],
    },
    "base-tr-corredor-morte": {
      titulo: "BASE TR - CORREDOR DA MORTE",
      mapa: "Dust 2",
      id: "base-tr-corredor-morte",
      secoes: [],
    },
    "fundo-a": {
      titulo: "FUNDO A",
      mapa: "Dust 2",
      id: "fundo-a",
      secoes: [],
    },
    "base-ct-rampa": {
      titulo: "BASE CT - RAMPA B",
      mapa: "Dust 2",
      id: "base-ct-rampa b",
      secoes: [],
    },
  };

  const setor = conteudos[setorId || ""];

  if (!setor) {
    return (
      <div
        style={{
          backgroundColor: "#111",
          color: "white",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <h1>Setor não encontrado</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#756f74",
        minHeight: "100vh",
        padding: "15px",
        display: "flex",
        gap: "15px",
        fontFamily: "Arial",
      }}
    >

      {/* SIDEBAR */}
      <aside
        style={{
          width: "250px",
          height: "700px",
          backgroundColor: "#d9d9d9",
          borderRadius: "12px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#111",
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              POSIÇÃO
            </h3>

            <input
              type="text"
              style={{
                width: "100%",
                height: "30px",
                borderRadius: "20px",
                border: "1px solid black",
                padding: "0 10px",
              }}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#111",
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              LADO DE TIME
            </h3>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <button>CONTRA TERRORISTA</button>
              <button>TERRORISTA</button>
              <button>AMBOS</button>
            </div>
          </div>

          <div>
            <h3
              style={{
                color: "#111",
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              FILTRAGEM GRANADAS
            </h3>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <button>SMOKES</button>
              <button>MOLOTOVS</button>
              <button>HE GRANADAS</button>
              <button>FLASHBANGS</button>
            </div>
          </div>
        </div>

        <button
          style={{
            borderRadius: "20px",
            border: "1px solid black",
            padding: "10px",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          SELECIONAR OUTRO MAPA
        </button>
      </aside>

      {/* CONTEÚDO */}

      <main style={{ flex: 1, padding: "20px"}}>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            marginBottom: "20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ← VOLTAR
        </button>

        {/* INFORMAÇÕES DO SETOR */}
        <div style={{ marginBottom: "30px", backgroundColor: "#1a1a1a", padding: "15px", borderRadius: "8px" }}>
          <h2 style={{ color: "white", marginTop: 0 }}>{setor.titulo}</h2>
          <p style={{ color: "#ccc", margin: "5px 0" }}><strong>Mapa:</strong> {setor.mapa}</p>
          <p style={{ color: "#ccc", margin: "5px 0" }}><strong>ID:</strong> {setor.id}</p>
        </div>

        {setor.secoes.map((secao) => (
          <section key={secao} style={{ marginBottom: "30px" }}>
            <h1
              style={{
                color: "white",
                fontSize: "38px",
                marginBottom: "15px",
              }}
            >
              {secao}
            </h1>

            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              {[1, 2, 3].map((card) => (
                <div
                  key={card}
                  style={{
                    flex: 1,
                    height: "220px",
                    backgroundColor: "#d9d9d9",
                    borderRadius: "15px",
                    position: "relative",
                    border: "1px solid #444",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      width: "100%",
                      height: "1px",
                      backgroundColor: "#777",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default PaginaSetor;