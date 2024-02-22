import { useQuery } from "@tanstack/react-query";
import { fetchKeyblades } from "../helpers/apiHelpers";

export const useKeyblades = () => {
  return useQuery({
    queryKey: ["keyblades"],
    queryFn: fetchKeyblades,
  });
};
