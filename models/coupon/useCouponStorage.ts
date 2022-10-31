export const useCouponStorage = () => {
  const checkUserUsedCoupon = (couponId: number) => {
    return localStorage.getItem(`coupon-${couponId}`) == "true";
  };

  const setUserUsedCoupon = (couponId: number) => {
    localStorage.setItem(`coupon-${couponId}`, "true");
  };


  const setUserUnusedCoupon = (couponId: number) => {
    localStorage.setItem(`coupon-${couponId}`, "false");
  };

  return {checkUserUsedCoupon, setUserUsedCoupon, setUserUnusedCoupon};
};
