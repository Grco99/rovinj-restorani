import RestoranPodaci from "./RestoranPodaci";

const RestoranService = {
  get() {
    return [...RestoranPodaci];
  },

  getBySifra(sifra) {
    return RestoranPodaci.find((r) => r.sifra === parseInt(sifra));
  },

  dodaj(restoran) {
    const maxSifra = RestoranPodaci.length > 0
      ? Math.max(...RestoranPodaci.map((r) => r.sifra))
      : 0;
    const novi = { ...restoran, sifra: maxSifra + 1 };
    RestoranPodaci.push(novi);
    return novi;
  },

  promjeni(sifra, restoran) {
    const index = RestoranPodaci.findIndex((r) => r.sifra === parseInt(sifra));
    if (index !== -1) {
      RestoranPodaci[index] = { ...restoran, sifra: parseInt(sifra) };
      return RestoranPodaci[index];
    }
    return null;
  },

  obrisi(sifra) {
    const index = RestoranPodaci.findIndex((r) => r.sifra === parseInt(sifra));
    if (index !== -1) {
      RestoranPodaci.splice(index, 1);
      return true;
    }
    return false;
  },
};

export default RestoranService;