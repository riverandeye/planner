import * as S from "./styles";

import React from "react";
import Header from "../header";
import SideBar from "../side-bar";

interface LayoutProps {
  children?: React.ReactNode;
  toggleModal: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleModal }) => {
  return (
    <S.Layout>
      <Header />
      <S.Content>
        <SideBar />
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.Content>
    </S.Layout>
  );
};

export default Layout;
