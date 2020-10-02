import React from "react";

import * as S from "./styles";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <S.SideBar>
      <S.SideBarContainer></S.SideBarContainer>
    </S.SideBar>
  );
};

export default SideBar;
