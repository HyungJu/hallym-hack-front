import styled from "styled-components";
import { Market } from "../models/market/types";
import React from "react";
import { Store } from "../models/store/types";

const StyledSubtitle = styled.h4`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;

  text-align: center;

  color: #6b7280;
`;

const StyledTitle = styled.h4`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  text-align: center;

  color: #1f2937;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export type StoreHeaderProps = {
  market: Market;
  store: Store;
};

export const StoreHeader: React.FC<StoreHeaderProps> = (props) => {
  return (
    <StyledHeader>
      <StyledSubtitle>{props.market.name}</StyledSubtitle>
      <StyledTitle>{props.store.name}</StyledTitle>
    </StyledHeader>
  );
};
