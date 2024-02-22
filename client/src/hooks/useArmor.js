import { useQuery } from "@tanstack/react-query";
import { fetchArmor } from "../helpers/apiHelpers";

export const useArmor = () => {
  return useQuery({
    queryKey: ["armor"],
    queryFn: fetchArmor,
  });
};
