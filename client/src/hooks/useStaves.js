import { useQuery } from "@tanstack/react-query";
import { fetchStaves } from "../helpers/apiHelpers";

export const useStaves = () => {
  return useQuery({ queryKey: ["staves"], queryFn: fetchStaves });
};
