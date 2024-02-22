import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../helpers/apiHelpers";

export const useItems = () => {
  return useQuery({ queryKey: ["items"], queryFn: fetchItems });
};
