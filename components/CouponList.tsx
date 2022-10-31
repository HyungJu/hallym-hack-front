import React from "react";
import { Store } from "../models/store/types";
import { useCouponList } from "../models/coupon/useCoupon";
import { CouponElement } from "./CouponElement";
import { useCouponStorage } from "../models/coupon/useCouponStorage";

export type CouponListProps = {
  store: Store;
};

export const CouponList: React.FC<CouponListProps> = (props) => {
  const { coupons, loading, error } = useCouponList(props.store.id);
  const hook = useCouponStorage();

  if (!coupons) return <h1>loading</h1>;
  return (
    <div style={{ marginBottom: "20px" }}>
      {coupons.map((coupon) => {
        if (hook.checkUserUsedCoupon(coupon.id)) return null;
        return <CouponElement coupon={coupon} key={coupon.id} />;
      })}
    </div>
  );
};
