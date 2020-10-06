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
          <br />
          꿈과 목표를 기록하고 달성하는 것을 돕는 사이트입니다.
          <br />큰 목표를 작은 단위로 쪼개어 기록하고
          <br />
          작은 것들을 하나하나 해결하다보면
          <br />
          멀게만 느껴졌던 꿈과 희망에
          <br />
          조금씩 가까워질 것이라고 생각합니다.
        </S.SideBarLeftStick>
        <S.SideBarLeftStick>
          궁극적인 목표를 최 상단에 기록하고
          <br />
          목표를 10개씩 쪼개서 해결해보세요
          <br />
          얼마나 목표를 이루었는지 쉽게 파악할 수 있고
          <br />
          하루하루 작은 목표를 이뤄가는
          <br />
          즐거움을 얻을 수 있습니다
          <br />
        </S.SideBarLeftStick>
        <S.SideBarLeftStick>
          시간을 기록하는 기능은 제외하였습니다
          <br />
          시간에 쫓기지 말고, 목표 자체를 몰두했으면 합니다
          <br />
          우리 인생은 한번 뿐이니까요
          <br />
          여러분들의 소중한 꿈들을 응원합니다
          <br />
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
        <S.Button>수정</S.Button>
        <S.Button onClick={deletePlan}>삭제</S.Button>
      </S.Buttons>
    </S.SideBarPlan>
  );
};

export default SideBarPlan;
