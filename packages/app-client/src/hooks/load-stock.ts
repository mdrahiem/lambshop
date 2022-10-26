import { useQuery } from "@tanstack/react-query";
import { loadStock } from "../api/load-stock";

const useLoadStock = () => useQuery(["stock"], loadStock);

export default useLoadStock;
