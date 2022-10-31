import { useRouter } from "next/router";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { useCouponStorage } from "../../models/coupon/useCouponStorage";
import { RWebShare } from "react-web-share";

export default function CouponDetail() {
  const router = useRouter();

  const couponStorage = useCouponStorage();
  const id = router.query.id;
  return (
    <CouponContainer>
      <Header title={"쿠폰을 사용하셨습니다"} />
      <div>
        <StyledInfoBox>
          친구에게 쿠폰북을 공유하고 쿠폰을 더 받아보세요.
        </StyledInfoBox>
        <RWebShare
          data={{
            text: "춘천시 재래시장 쿠폰북!!",
            title: "쿠폰 받아가세용",
          }}
          onClick={() => {
            router.push("/");
            if (!id) return;

            couponStorage.setUserUnusedCoupon(parseInt(id as string));
            alert("쿠폰을 다시 지급해 드렸습니다.");
          }}
        >
          <StyledButton>공유하기</StyledButton>
        </RWebShare>
      </div>
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
  height: 80vh;
  justify-content: space-between;
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
