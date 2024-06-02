import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewCar from "./pages/NewCar/NewCar";
import OccasionCar from "./pages/OccasionCar/OccasionCar";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newcar" element={<NewCar />} />
        <Route path="/occasioncar" element={<OccasionCar />} />
    </Routes>
  )
}
