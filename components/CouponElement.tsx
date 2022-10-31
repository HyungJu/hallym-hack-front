import styled from "styled-components";
import { Coupon } from "../models/coupon/types";
import { useRouter } from "next/router";
import { formatDistance } from "date-fns";
import { ko } from "date-fns/locale";

export const CouponElement: React.FC<CouponProps> = ({ coupon }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/coupon/${coupon.id}`);
  };

  const daysLeft = formatDistance(new Date(coupon.expireAt), new Date(), {
    locale: ko,
  });

  return (
    <StyledContainer onClick={onClick}>
      <StyledImage src={coupon.image} />
      <StyledCouponName>{coupon.name}</StyledCouponName>
      <StyledBullet>
        <StyledBulletText>{daysLeft} 남음</StyledBulletText>
      </StyledBullet>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;

  background: #f3f4f6;
  border-radius: 10px;

  padding: 15px;
`;
const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
const StyledCouponName = styled.h4`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  padding-top: 15px;
  padding-bottom: 15px;

  line-height: 16px;
  /* identical to box height */

  text-align: center;

  color: #000000;
`;
const StyledBullet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;

  /* Default/green/500 */

  background: #10b981;
  border-radius: 300px;
`;

const StyledBulletText = styled.p`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */

  text-align: center;

  /* Default/green/50 */

  color: #ecfdf5;
`;

type CouponProps = {
  coupon: Coupon;
};
