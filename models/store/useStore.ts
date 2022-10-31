import useAxios from "axios-hooks";
import { Store } from "./types";
import { constants } from "../../constants";

export const useStoreList = () => {
  const [{ data, loading, error }, refetch] = useAxios<Store[]>({
    url: `${constants.API_URL}/store`,
  });

  return {
    stores: data,
    loading,
    error,
  };
};

export const useStore = (id: number) => {
  const [{ data, loading, error }, refetch] = useAxios<Store>({
    url: `${constants.API_URL}/store/${id}`,
  });

  return {
    store: data,
    loading,
    error,
  };
};
