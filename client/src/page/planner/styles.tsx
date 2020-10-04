import styled from "styled-components/macro";
import { Flex_Center_Center, Flex_Row_Start_Center } from "../../constant";
import { getRandomHexColor } from "../../lib/color";

export const SideBar = styled.div`
  width: 30rem;

  height: 100%;
  border-right: 1px solid rgb(222, 222, 222);
`;

export const SideBarContainer = styled.div``;

export const Planner = styled.div`
  width: calc(100% - 30rem);
  height: 100%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: scroll;
`;

export const PlanLevel = styled.div`
  width: 25rem;
  height: 100%;
  border-right: 1px solid rgb(222, 222, 222);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const PlanLevelMeta = styled.div`
  width: 100%;
  height: 6rem;

  border-bottom: 1px solid rgb(222, 222, 222);
`;

export const PlanBoxes = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const PlanBox = styled.div`
  width: 23rem;
  height: 4rem;

  margin: 1rem 0rem 2rem;

  font-size: 1.4rem;

  border: 1px solid rgb(222, 222, 222);

  display: flex;
  justify-content: flex-start;
`;

export const PlanBoxLabel = styled.div`
  width: 4rem;
  height: 100%;
  border-right: 1px solid rgb(222, 222, 222);

  ${Flex_Center_Center}
`;

export const PlanBoxContent = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 1rem;

  ${Flex_Row_Start_Center}
`;
