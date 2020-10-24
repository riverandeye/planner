import React from "react";
import Plan from "../../model/plan";

import * as S from "./styles";

interface SideBarPlan {
  plan: Plan;
  deletePlan: () => void;
}

const SideBarPlan: React.FC<SideBarPlan> = ({ plan, deletePlan }) => {
  if (!plan)
    return (
      <S.SideBarPlan>
        <S.SideBarTitle>안녕하세요 강관훈입니다.</S.SideBarTitle>
        <S.SideBarLeftStick>
          궁극적인 목표를 최 상단에 기록하고
          <br />
          목표를 잘게 나누어 기록해보세요.
          <br />
          얼마나 목표를 이루었는지 쉽게 파악할 수 있고
          <br />
          하루하루 작은 목표를 이뤄가는
          <br />
          즐거움을 얻을 수 있습니다
          <br />
        </S.SideBarLeftStick>
        <S.SideBarLeftStick>
          현재 개인적으로 사용하고 있습니다.
          <br />
          밑의 메일으로 문의 남겨주시면 계정 생성해 드리겠습니다.
        </S.SideBarLeftStick>
        <S.SideBarContent>
          Email : riverandeye@gmail.com
          <br /> HP : 010-2014-0794
          <br /> Blog :{" "}
          <a href="https://riverandeye.tistory.com/" target="_blank">
            tistory
          </a>
          <br /> Github :{" "}
          <a href="https://github.com/riverandeye/" target="_blank">
            riverandeye
          </a>
        </S.SideBarContent>
      </S.SideBarPlan>
    );

  return (
    <S.SideBarPlan>
      <S.SideBarTitle>{plan.title}</S.SideBarTitle>
      <S.SideBarContent>{plan.content}</S.SideBarContent>
      <S.SideBarStatus active={plan.accomplished}>
        {plan.accomplished ? "완료" : "미완"}
      </S.SideBarStatus>
      <S.Buttons>
        <S.Button>완료</S.Button>
        <S.Button onClick={deletePlan}>삭제</S.Button>
      </S.Buttons>
    </S.SideBarPlan>
  );
};

export default SideBarPlan;
