import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RouteNames, LOKACIJE } from "../../constants";
import RestoranService from "../../../services/restorani/RestoranService";

export default function RestoranNovi() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const podaci = new FormData(e.target);

    RestoranService.dodaj({
      naziv: podaci.get("naziv"),
      parcela: podaci.get("parcela"),
      godinaPlantaze: parseInt(podaci.get("godinaPlantaze")),
      prinosKg: parseInt(podaci.get("prinosKg")),
      aktivna: podaci.get("aktivna") === "on",
    });

    navigate(RouteNames.RESTORANI);
  }

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>Dodaj novi restoran</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="naziv">
          <Form.Label>Naziv restorana</Form.Label>
          <Form.Control type="text" name="naziv" placeholder="Npr. Konoba Kantinon" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="parcela">
          <Form.Label>Lokacija</Form.Label>
          <Form.Select name="parcela" required>
            <option value="">-- Odaberi lokaciju --</option>
            {LOKACIJE.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="godinaPlantaze">
          <Form.Label>Godina otvorenja</Form.Label>
          <Form.Control type="number" name="godinaPlantaze" placeholder="Npr. 2005" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="prinosKg">
          <Form.Label>Ocjena (1-5)</Form.Label>
          <Form.Control type="number" name="prinosKg" min="1" max="5" placeholder="Npr. 5" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="aktivna">
          <Form.Check type="checkbox" name="aktivna" label="Restoran je trenutno otvoren" defaultChecked />
        </Form.Group>

        <hr />
        <div className="d-flex gap-2">
          <Button variant="success" type="submit">
            Spremi restoran
          </Button>
          <Button variant="secondary" onClick={() => navigate(RouteNames.RESTORANI)}>
            Odustani
          </Button>
        </div>
      </Form>
    </Container>
  );
}