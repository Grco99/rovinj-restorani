import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import { GrValidate } from "react-icons/gr";
import RestoranService from "../../services/restorani/RestoranService";
import { RouteNames } from "../../constants";

export default function RestoraniPregled() {
  const [restorani, setRestorani] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRestorani(RestoranService.get());
  }, []);

  function handleObrisi(sifra) {
    if (window.confirm("Sigurno obrisati ovaj restoran?")) {
      RestoranService.obrisi(sifra);
      setRestorani(RestoranService.get());
    }
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Pregled ugostiteljskih objekata</h2>
        <Button variant="warning" className="fw-bold text-dark" onClick={() => navigate(RouteNames.RESTORAN_NOVI)}>
          + Dodaj restoran
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Naziv</th>
            <th>Kategorija</th>
            <th>Lokacija</th>
            <th>God. otvorenja</th>
            <th>Ocjena</th>
            <th>Otvoren</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {restorani.map((r) => (
            <tr key={r.sifra}>
              <td>{r.sifra}</td>
              <td className="fw-bold">{r.naziv}</td>
              <td>{r.kategorija}</td>
              <td>{r.lokacija}</td>
              <td>{r.godinaOtvorenja}</td>
              <td>{"⭐".repeat(r.ocjena)}</td>
              <td>
                <GrValidate size={20} color={r.aktivan ? "#198754" : "#adb5bd"} />
              </td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => navigate(RouteNames.RESTORAN_PROMJENA.replace(":sifra", r.sifra))}>
                  Promijeni
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => handleObrisi(r.sifra)}>
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