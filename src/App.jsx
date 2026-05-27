import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Izbornik from "./components/Izbornik";
import Home from "./pages/restorani/Home";
import RestoraniPregled from "./pages/restorani/RestoraniPregled";
import RestoranNovi from "./pages/restorani/RestoranNovi";
import RestoranPromjena from "./pages/restorani/RestoranPromjena";
import { RouteNames } from "./constants";

export default function App() {
  return (
    <BrowserRouter>
      <Izbornik />
      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />
        <Route path={RouteNames.RESTORANI} element={<RestoraniPregled />} />
        <Route path={RouteNames.RESTORAN_NOVI} element={<RestoranNovi />} />
        <Route path={RouteNames.RESTORAN_PROMJENA} element={<RestoranPromjena />} />
      </Routes>
    </BrowserRouter>
  );
}
