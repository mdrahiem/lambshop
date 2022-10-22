import { useQuery } from "@tanstack/react-query";
import { loadStock } from "../api/loadStock";

const useLoadStock = () => useQuery(["stock"], loadStock);

export default useLoadStock;
