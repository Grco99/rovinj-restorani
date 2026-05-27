import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import RestoranService from "../../services/restorani/RestoranService";
import { RouteNames, KATEGORIJE, LOKACIJE } from "../../constants";

export default function RestoranNovi() {
  const navigate = useNavigate();
  const [restoran, setRestoran] = useState({
    naziv: "",
    kategorija: "",
    lokacija: "",
    godinaOtvorenja: "",
    ocjena: "5",
    aktivan: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setRestoran((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    RestoranService.dodaj({
      ...restoran,
      godinaOtvorenja: parseInt(restoran.godinaOtvorenja),
      ocjena: parseInt(restoran.ocjena),
    });
    navigate(RouteNames.RESTORANI);
  }

  return (
    <Container className="py-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Dodaj novi restoran</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Naziv restorana</Form.Label>
          <Form.Control type="text" name="naziv" value={restoran.naziv} onChange={handleChange} required />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Label>Kategorija</Form.Label>
            <Form.Select name="kategorija" value={restoran.kategorija} onChange={handleChange} required>
              <option value="">-- Odaberi --</option>
              {KATEGORIJE.map((k) => <option key={k} value={k}>{k}</option>)}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Lokacija</Form.Label>
            <Form.Select name="lokacija" value={restoran.lokacija} onChange={handleChange} required>
              <option value="">-- Odaberi --</option>
              {LOKACIJE.map((l) => <option key={l} value={l}>{l}</option>)}
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Godina otvorenja</Form.Label>
            <Form.Control type="number" name="godinaOtvorenja" value={restoran.godinaOtvorenja} onChange={handleChange} required />
          </Col>
          <Col>
            <Form.Label>Ocjena (1-5)</Form.Label>
            <Form.Control type="number" name="ocjena" min="1" max="5" value={restoran.ocjena} onChange={handleChange} required />
          </Col>
        </Row>

        <Form.Check className="mb-4" type="checkbox" label="Restoran trenutno radi" name="aktivan" checked={restoran.aktivan} onChange={handleChange} />

        <div className="d-flex gap-2">
          <Button type="submit" variant="warning" className="fw-bold text-dark">Spremi</Button>
          <Button variant="secondary" onClick={() => navigate(RouteNames.RESTORANI)}>Odustani</Button>
        </div>
      </Form>
    </Container>
  );
}