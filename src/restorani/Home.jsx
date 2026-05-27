import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="mt-4 text-center">
      <h1 className="display-4 fw-bold">Gastro Vodič Rovinj 🍽️</h1>
      <p className="lead mt-3">
        Dobrodošli u aplikaciju za evidenciju i pregled ugostiteljskih objekata na području grada Rovinja.
      </p>
      <hr className="my-4" />
      <p className="text-muted">
        Koristite gornji izbornik za navigaciju na pregled restorana, dodavanje novih objekata ili izmjenu postojećih podataka.
      </p>
    </Container>
  );
}