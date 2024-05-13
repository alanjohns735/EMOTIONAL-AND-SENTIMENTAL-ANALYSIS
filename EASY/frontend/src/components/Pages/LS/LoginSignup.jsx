import React from "react";
import "./styles.css";
import styled from "styled-components";
import AccountBox from "./Comp/accountBox/index"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LoginSignup() {
  return <AppContainer>
    <AccountBox />
  </AppContainer>
}
