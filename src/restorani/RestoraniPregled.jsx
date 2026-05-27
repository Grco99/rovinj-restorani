import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import RestoranService from "../../../services/restorani/RestoranService";
import { GrValidate } from "react-icons/gr";

export default function RestoraniPregled() {
  const [restorani, setRestorani] = useState([]);
  const navigate = useNavigate();

  function dohvatiRestorane() {
    setRestorani(RestoranService.get());
  }

  useEffect(() => {
    dohvatiRestorane();
  }, []);

  function obrisi(sifra) {
    if (confirm("Sigurno obrisati ovaj restoran?")) {
      RestoranService.obrisi(sifra);
      dohvatiRestorane();
    }
  }

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Pregled ugostiteljskih objekata</h2>
        <Button variant="success" onClick={() => navigate(RouteNames.RESTORAN_NOVI)}>
          Dodaj novi restoran
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Naziv</th>
            <th>Lokacija (Parcela)</th>
            <th>Godina otvorenja</th>
            <th>Ocjena (1-5)</th>
            <th>Aktivan</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {restorani.map((r) => (
            <tr key={r.sifra}>
              <td>{r.naziv}</td>
              <td>{r.parcela}</td>
              <td>{r.godinaPlantaze}</td>
              <td>{r.prinosKg} ⭐</td>
              <td>
                <GrValidate size={20} color={r.aktivna ? "green" : "gray"} />
              </td>
              <td>
                <Button variant="primary" size="sm" className="me-2" onClick={() => navigate(RouteNames.RESTORAN_PROMJENA.replace(":sifra", r.sifra))}>
                  Promijeni
                </Button>
                <Button variant="danger" size="sm" onClick={() => obrisi(r.sifra)}>
                  Obriši
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}