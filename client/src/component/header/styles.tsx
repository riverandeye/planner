import styled from "styled-components/macro";

interface ActiveProps {
  active?: boolean;
}

export const Header = styled.div`
  width: 100%;
  height: 4.8rem;
  font-size: 2rem;
  color: #777777;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid rgb(222, 222, 222);
`;

export const HeaderContainer = styled.div``;
