import { useRouter } from "next/router";
import { useCoupon } from "../../models/coupon/useCoupon";
import { useStore } from "../../models/store/useStore";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { useCouponStorage } from "../../models/coupon/useCouponStorage";
import { registerStat } from "../../models/stats/useStats";

export default function CouponDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { coupon } = useCoupon(id as string);
  const { store } = useStore(coupon?.storeId);
  const couponStorage = useCouponStorage();

  const onUse = () => {
    if (!store || !coupon) return;
    //couponStorage.setUserUsedCoupon(coupon?.id);
    registerStat(store.id, coupon.id);
    router.push("/used/" + coupon.id);
  };
  if (!coupon || !store) return <h1>Loading</h1>;
  return (
    <CouponContainer>
      <Header title={"🏬 " + store.name} />
      <StyledImage src={store.image} />
      <StyledInfoBox>
        <StyledLeftText>영업시간</StyledLeftText>
        <StyledRightText>{store.operationHour}</StyledRightText>
      </StyledInfoBox>
      {/*<StyledButton>지도로 이동</StyledButton>*/}
      <StyledCouponContainer>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <StyledCouponTitle>{coupon.name}</StyledCouponTitle>
        </div>

        <UseCouponButton onClick={onUse}>쿠폰 사용하기</UseCouponButton>
      </StyledCouponContainer>
    </CouponContainer>
  );
}

export const StyledCouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 10px 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;
  height: 200px;
  background: #111827;
  border-radius: 10px;
`;

export const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const StyledImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const StyledInfoBox = styled.div`
  background: #f3f4f6;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 47px;
  height: 60px;
  margin-top: 15px;
`;

export const StyledButton = styled.div`
  background: #5ac451;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 10px;

  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

export const StyledLeftText = styled.p`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Default/gray/500 */

  color: #6b7280;
`;

export const StyledRightText = styled.p`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Default/gray/800 */

  color: #1f2937;
`;

export const UseCouponButton = styled.div`
  /* Default/gray/700 */

  background: #374151;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 13px;
`;

export const StyledCouponTitle = styled.h1`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  padding-top: 15px;
  padding-bottom: 15px;

  line-height: 16px;
  /* identical to box height */

  text-align: center;

  color: #f9fafb;
`;
