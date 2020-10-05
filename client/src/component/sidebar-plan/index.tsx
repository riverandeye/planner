import React from "react";

import * as S from "./styles";

interface SideBarPlan {}

const SideBarPlan: React.FC<SideBarPlan> = () => {
  return (
    <S.SideBarPlan>
      <S.SideBarPlanContainer></S.SideBarPlanContainer>
    </S.SideBarPlan>
  );
};

export default SideBarPlan;
