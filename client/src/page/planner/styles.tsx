import styled from "styled-components/macro";
import { fadeIn } from "../../animation/keyframe";
import { BREAKPOINT, Flex_Center_Center, Flex_Row_Start_Center } from "../../constant";

export const SideBar = styled.div`
  display: none;
  width: 35rem;

  height: 100%;
  border-right: 1px solid rgb(222, 222, 222);

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SideBarContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SideBarBlock = styled.div`
  display: flex;
  justify-content: flex-start;

  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const Planner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: scroll;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: calc(100% - 30rem);
  }
`;

export const PlanLevel = styled.div`
  width: 25rem;
  height: 100%;
  border-right: 1px solid rgb(222, 222, 222);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  animation: ${fadeIn} 1s linear;
`;

export const PlanLevelMeta = styled.div`
  width: 100%;
  height: 6rem;

  border-bottom: 1px solid rgb(222, 222, 222);
`;

export const PlanBoxes = styled.div`
  width: 50vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 25rem;
    display: block;
  }
`;

export const PlanBox = styled.div`
  width: 100%;
  height: 4rem;

  margin: 1rem 0rem 2rem;

  font-size: 1.4rem;

  border-top: 1px solid rgb(222, 222, 222);
  border-bottom: 1px solid rgb(222, 222, 222);

  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const AddRootPlan = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 1.8rem;
  border: none;
  outline: none;

  ${Flex_Center_Center}

  &:hover {
    background-color: #3dfe22;
    transition: 0.3s;
  }
`;

export const PlanBoxLabel = styled.div`
  width: 4rem;
  height: 100%;
  border-right: 1px solid rgb(222, 222, 222);

  ${Flex_Center_Center}
`;

export const PlanBoxContent = styled.div`
  width: 21rem;
  height: 100%;

  padding-left: 1rem;

  ${Flex_Row_Start_Center}
`;
