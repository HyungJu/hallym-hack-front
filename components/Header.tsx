import React from "react";
import styled from "styled-components";
import { useMarketList } from "../models/market/useMarket";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 30px;
`;

const StyledLogo = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 24px;

  color: #374151;
`;

export type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const { markets, loading, error } = useMarketList();

  return (
    <StyledHeader>
      <StyledLogo>{title}</StyledLogo>
    </StyledHeader>
  );
};
