import { useParams } from "react-router-dom";
import House from ".";
import { HouseType } from "../types/house";

type Args = {
  allHouses: HouseType[];
};

const HouseFromQuery = ({ allHouses }: Args) => {
  const { id } = useParams();
  if (!id) return <div>House id not found.</div>;
  const house = allHouses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found.</div>;
  return <House house={house}></House>;
};

export default HouseFromQuery;
