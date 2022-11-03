import { useQuery } from "@tanstack/react-query";
import { loadStock } from "../api/load-stock";

type useLoadStockParams = {
  days?: number;
};

const useLoadStock = ({ days }: useLoadStockParams) =>
  useQuery(["stock"], () => loadStock(days));

export default useLoadStock;
