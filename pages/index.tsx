import { Header } from "../components/Header";
import React from "react";
import { StoreList } from "../components/StoreList";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
export default function Home() {
  return (
    <HomeContainer>
      <Header title={"재래시장 쿠폰북 💵"} />
      <StoreList />
    </HomeContainer>
  );
}
