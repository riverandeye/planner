import React from "react";

import * as S from "./styles";

interface SideBarGoal {}

const SideBarGoal: React.FC<SideBarGoal> = () => {
  return (
    <S.SideBarGoal>
      <S.SideBarTitle>남을 돕는 사람 되기</S.SideBarTitle>
      <S.SideBarContent>
        다른 사람을 돕다보면 재밌구오 박지성 방구 냄새는 별로입니다
      </S.SideBarContent>
      <S.SideBarAccomplished>완료</S.SideBarAccomplished>
    </S.SideBarGoal>
  );
};

export default SideBarGoal;
