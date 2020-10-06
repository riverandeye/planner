import styled from "styled-components/macro";
import { fadeIn } from "../../animation/keyframe";
import { Flex_Center_Center, Flex_Column_Start_Center } from "../../constant";
import Active from "../../interface/active";

export const SideBarPlan = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 2rem;

  ${Flex_Column_Start_Center}
  animation: ${fadeIn} 1s linear;
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

export const SideBarLeftStick = styled.div`
  width: 100%;
  color: rgb(160, 160, 160);
  font-size: 1.4rem;

  padding: 1.5rem;
`;

export const SideBarStatus = styled.div<Active>`
  margin-top: 2rem;
  height: 4rem;
  width: 4rem;

  ${Flex_Center_Center}

  background-color : ${(props) => (props.active ? "#3dfe22" : "#fe3d22")};
  color: ${(props) => (props.active ? "black" : "white")};
  font-size: 1.8rem;
  border-radius: 50%;
`;

export const Buttons = styled.div`
  padding-top: 2rem;
`;

export const Button = styled.button``;
