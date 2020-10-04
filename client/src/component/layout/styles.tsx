import styled from "styled-components/macro";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
`;
