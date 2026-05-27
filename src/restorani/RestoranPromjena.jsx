import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { RouteNames, LOKACIJE } from "../../constants";
import RestoranService from "../../../services/restorani/RestoranService";

export default function RestoranPromjena() {
  const navigate = useNavigate();
  const { sifra } = useParams();
  const [restoran, setRestoran] = useState(null);

  useEffect(() => {
    const podatak = RestoranService.getBySifra(sifra);
    if (!podatak) {
      navigate(RouteNames.RESTORANI);
      return;
    }
    setRestoran(podatak);
  }, [sifra, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const podaci = new FormData(e.target);

    RestoranService.promjeni(sifra, {
      naziv: podaci.get("naziv"),
      parcela: podaci.get("parcela"),
      godinaPlantaze: parseInt(podaci.get("godinaPlantaze")),
      prinosKg: parseInt(podaci.get("prinosKg")),
      aktivna: podaci.get("aktivna") === "on",
    });

    navigate(RouteNames.RESTORANI);
  }

  if (!restoran) return null;

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>Uredi restoran #{sifra}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="naziv">
          <Form.Label>Naziv restorana</Form.Label>
          <Form.Control type="text" name="naziv" defaultValue={restoran.naziv} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="parcela">
          <Form.Label>Lokacija</Form.Label>
          <Form.Select name="parcela" defaultValue={restoran.parcela} required>
            {LOKACIJE.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="godinaPlantaze">
          <Form.Label>Godina otvorenja</Form.Label>
          <Form.Control type="number" name="godinaPlantaze" defaultValue={restoran.godinaPlantaze} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="prinosKg">
          <Form.Label>Ocjena (1-5)</Form.Label>
          <Form.Control type="number" name="prinosKg" min="1" max="5" defaultValue={restoran.prinosKg} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="aktivna">
          <Form.Check type="checkbox" name="aktivna" label="Restoran je trenutno otvoren" defaultChecked={restoran.aktivna} />
        </Form.Group>

        <hr />
        <div className="d-flex gap-2">
          <Button variant="primary" type="submit">
            Spremi izmjene
          </Button>
          <Button variant="secondary" onClick={() => navigate(RouteNames.RESTORANI)}>
            Odustani
          </Button>
        </div>
      </Form>
    </Container>
  );
}