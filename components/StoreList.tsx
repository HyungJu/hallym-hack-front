import React from "react";
import { StoreHeader } from "./StoreHeader";
import { useMarketList } from "../models/market/useMarket";
import { CouponList } from "./CouponList";
import styled from "styled-components";

const StyledStoreListContainer = styled.div`
  gap: 50px;
`;
export const StoreList: React.FC = () => {
  const { markets, loading, error } = useMarketList();
  if (!markets) return <div>loading...</div>;

  return markets.flatMap((market) => {
    return market.stores.flatMap((store) => {
      return (
        <StyledStoreListContainer>
          <StoreHeader market={market} store={store} />
          <CouponList store={store} />
        </StyledStoreListContainer>
      );
    });
  });
};
