import { useState, useEffect, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HouseFromQuery from "../house/HouseFromQuery";
import { HouseType } from "../types/house";

function App() {
  const [allHouses, setAllHouses] = useState<HouseType[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />

        <Routes>
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={allHouses} />}
          ></Route>

          <Route
            path="/house/:id"
            element={<HouseFromQuery allHouses={allHouses} />}
          ></Route>

          <Route
            path="/"
            element={<FeaturedHouse house={featuredHouse} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
