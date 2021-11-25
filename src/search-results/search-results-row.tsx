import { useNavigate } from "react-router-dom";
import { HouseType } from "../types/house";
import "./search-results.css";

type Args = {
  house: HouseType;
};

const SearchResultsRow = ({ house }: Args) => {
  const nav = useNavigate();

  const setActive = () => {
    nav(`/house/${house.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{house.price}</td>
      <td>
        <button className="btn btn-primary">Edit</button>
      </td>
    </tr>
  );
};

export default SearchResultsRow;
