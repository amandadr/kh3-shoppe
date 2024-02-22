import { useQuery } from "@tanstack/react-query";
import { fetchAccessories } from "../helpers/apiHelpers";

export const useAccessories = () => {
  return useQuery({
    queryKey: ["accessories"],
    queryFn: fetchAccessories,
  });
};
