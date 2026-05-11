interface Setor {
  nome: string;
}

interface Mapa {
  nome: string;
  setores: {
    [key: string]: Setor;
  };
}

interface Mapas {
  [key: string]: Mapa;
}

const mapas: Mapas = {
  mirage: {
    nome: "Mirage",
    setores: {
      "bombsite-a": {
        nome: "Bombsite A",
      },

      "bombsite-b": {
        nome: "Bombsite B",
      },
    },
  },

  inferno: {
    nome: "Inferno",
    setores: {
      banana: {
        nome: "Banana",
      },
    },
  },
};

export default mapas;