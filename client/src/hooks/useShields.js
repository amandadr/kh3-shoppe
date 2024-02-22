import { useQuery } from "@tanstack/react-query";
import { fetchShields } from "../helpers/apiHelpers";

export const useShields = () => {
  return useQuery({ queryKey: ["shields"], queryFn: fetchShields });
};
