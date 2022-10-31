import useAxios from "axios-hooks";
import { Market } from "./types";
import { constants } from "../../constants";

export const useMarketList = () => {
  const [{ data, loading, error }, refetch] = useAxios<Market[]>({
    url: `${constants.API_URL}/market`,
  });

  return {
    markets: data,
    loading,
    error,
  };
};
