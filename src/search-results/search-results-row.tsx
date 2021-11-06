import { useHistory } from "react-router-dom";
import { HouseType } from "../types/house";
import "./search-results.css";

type Args = {
  house: HouseType;
};

const SearchResultsRow = ({ house }: Args) => {
  const history = useHistory();

  const setActive = () => {
    history.push(`/house/${house.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{house.price}</td>
    </tr>
  );
};

export default SearchResultsRow;
