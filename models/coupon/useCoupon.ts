import useAxios from "axios-hooks";
import { Coupon } from "./types";
import { constants } from "../../constants";

export const useCouponList = (storeId: number) => {
  const [{ data, loading, error }, refetch] = useAxios<Coupon[]>({
    url: `${constants.API_URL}/store/${storeId}/coupon`,
  });

  console.log(data);
  return {
    coupons: data,
    loading,
    error,
  };
};

export const useCoupon = (couponId: string) => {
  const [{ data, loading, error }, refetch] = useAxios<Coupon>({
    url: `${constants.API_URL}/coupon/${couponId}`,
  });

  console.log(data);
  return {
    coupon: data,
    loading,
    error,
  };
};
