import { Routes, Route } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Directors from "../pages/Directors";
import Home from "../pages/Home";
import Details from "../pages/Details";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directors" element={<Directors />}/>
        <Route path="/directors/:details" element={<Details />} />
      </Routes>
    </>
  );
}

export default Router;
