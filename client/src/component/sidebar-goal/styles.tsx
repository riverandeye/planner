import styled from "styled-components/macro";
import { Flex_Center_Center, Flex_Column_Start_Center } from "../../constant";

export const SideBarGoal = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 2rem;

  ${Flex_Column_Start_Center}
`;

export const SideBarTitle = styled.div`
  font-size: 2rem;

  margin-top: 1rem;
`;

export const SideBarContent = styled.div`
  color: rgb(160, 160, 160);
  font-size: 1.4rem;

  padding: 1.5rem;
`;

export const SideBarAccomplished = styled.div`
  margin-top: 2rem;
  height: 4rem;
  width: 4rem;

  ${Flex_Center_Center}

  background-color : #3dfe22;
  font-size: 1.8rem;
  border-radius: 50%;
`;

export const SideBarFailed = styled.div`
  margin-top: 2rem;
  height: 4rem;
  width: 4rem;

  ${Flex_Center_Center}

  background-color : #3dfe22;
  font-size: 1.8rem;
  border-radius: 50%;
`;
