import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { RouteNames } from "../../constants";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ position: "relative", maxHeight: "480px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974"
          alt="Rovinj Restorani"
          style={{ width: "100%", objectFit: "cover", maxHeight: "480px", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <h1 style={{ fontWeight: 700, fontSize: "2.8rem", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
            Gastro Vodič Rovinj
          </h1>
          <p style={{ fontSize: "1.3rem", marginBottom: "1.5rem", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
            Evidencija ugostiteljskih objekata, lokacija i ocjena
          </p>
          <Button
            variant="warning"
            size="lg"
            className="fw-bold text-dark"
            onClick={() => navigate(RouteNames.RESTORANI)}
          >
            Pregled restorana
          </Button>
        </div>
      </div>

      <Container className="py-5">
        <h2 className="mb-4">O aplikaciji</h2>
        <p className="text-muted" style={{ maxWidth: 640 }}>
          Ova web aplikacija služi za evidenciju ugostiteljskih objekata na području grada Rovinja. 
          Omogućuje pregled, dodavanje novih restorana, izmjenu postojećih podataka te brisanje iz sustava (CRUD).
        </p>
      </Container>
    </div>
  );
}