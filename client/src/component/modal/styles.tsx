import styled from "styled-components";
import { fadeIn } from "../../animation/keyframe";

interface ModalProps {
  show?: boolean;
  toggleModalShow?: () => void;
  partial?: boolean;
}

export const Modal = styled.div<ModalProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  z-index: 1000;
  left: ${(props) => (props.partial ? "none" : 0)};
  top: ${(props) => (props.partial ? "none" : 0)};
  width: 100%;
  flex: 1;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 0.3s linear;
`;

export const Container = styled.div`
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
`;
