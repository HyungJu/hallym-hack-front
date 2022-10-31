import useAxios from "axios-hooks";
import { Stats } from "fs";
import axios from "axios";
import { constants } from "../../constants";

export const useStats = (storeId) => {
  const [{ data, loading, error }, refetch] = useAxios<Stats>({
    url: `${constants.API_URL}/stats/stores/${storeId}`,
  });

  return {
    stats: data,
    loading,
    error,
  };
};

export const registerStat = (storeId: number, couponId: number) => {
  try {
    axios.post(`${constants.API_URL}/stats`, {
      storeId,
      couponId,
    });
  } catch (e) {}
};
