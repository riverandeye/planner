import styled from "styled-components/macro";
import { fadeIn } from "../../animation/keyframe";

import {
  BREAKPOINT,
  Flex_Center_Center,
  Flex_Column_Start_Center,
  Flex_Row_Start_Center,
  Hide_Scrollbar,
} from "../../constant";
import Active from "../../interface/active";

export const SideBar = styled.div`
  display: none;
  width: 25%;

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
  height: 100%;
  position: relative;

  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: scroll;

  ${Hide_Scrollbar}

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: calc(100% - 35rem);
    position: relative;
  }
`;

export const PlanLevel = styled.div`
  width: 50vw;
  height: 100%;
  border-right: 1px solid rgb(222, 222, 222);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  animation: ${fadeIn} 1s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 25rem;
  }
`;

export const PlanLevelMeta = styled.div`
  width: 100%;
  height: 6rem;

  border-bottom: 1px solid rgb(222, 222, 222);
  transition: 0.3s;
`;

export const PlanBoxes = styled.div`
  width: 50vw;
  height: 100%;

  flex-wrap: nowrap;
  overflow: scroll;

  ${Hide_Scrollbar}

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 25rem;
  }
`;

export const PlanBox = styled.div<Active>`
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

  /* border-left: ${(p) => (p.active ? `1px solid rgb(222, 222, 222)` : "none")}; */
  border-right: ${(p) => (p.active ? `1px solid rgb(222, 222, 222)` : "none")};
  background-color: ${(p) => (p.active ? `rgb(245, 245, 245)` : "inherit")};
  transition: 0.3s;
`;

export const AddPlan = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 1.8rem;
  border: none;
  outline: none;

  ${Flex_Center_Center}

  margin-top : 1rem;

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

export const CreatePlanModal = styled.div`
  width: 30rem;
  height: 40rem;

  border-radius: 1rem;

  ${Flex_Column_Start_Center}

  padding-top : 3rem;
`;

export const CreatePlanTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const CreatePlanDescription = styled.div`
  font-size: 1.4rem;
  text-align: center;
  color: rgb(160, 160, 160);
`;

export const CreatePlanElement = styled.div`
  padding: 1rem;
`;

export const CreatePlanLabel = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CreatePlanInput = styled.input`
  width: 20rem;
  height: 3rem;
  padding: 0.5rem;

  font-size: 1.4rem;
`;

export const CreatePlanTextarea = styled.textarea`
  width: 20rem;
  height: 13rem;
  padding: 0.5rem;

  resize: vertical;

  max-height: 18rem;
`;

export const CreatePlanButton = styled.button``;
