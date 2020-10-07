import React from "react";

import * as S from "./styles";
import { useLogin, usePlanner } from "./hooks";
import Modal from "../../component/modal";
import Layout from "../../component/layout";
import { useUser } from "../../context/user";
import { getRandomHexColor } from "../../lib/color";
import SideBarPlan from "../../component/sidebar-plan";

const Planner: React.FC = () => {
  const user = useUser();
  const {
    newPlan,
    planTree,
    onClickPlan,
    currentPlan,
    createNewPlan,
    updateNewPlan,
    clickedHistory,
    deleteSelectedPlan,
    hideCreatePlanModal,
    showCreatePlanModal,
    onClickCreatePlanButton,
  } = usePlanner();

  const { setId, setPw, onClickLogin, showLoginModal } = useLogin();

  return (
    <>
      <Layout>
        <S.SideBar>
          <SideBarPlan plan={currentPlan} deletePlan={deleteSelectedPlan} />
        </S.SideBar>
        <S.Planner>
          {planTree.map((plans, plansIdx) => (
            <S.PlanLevel key={plansIdx}>
              <S.PlanLevelMeta
                style={{ backgroundColor: `#${getRandomHexColor()}` }}
              ></S.PlanLevelMeta>
              <S.PlanBoxes>
                {plans.map((plan, planIdx) => (
                  <S.PlanBox
                    active={clickedHistory.includes(plan.id)}
                    key={planIdx}
                    onClick={onClickPlan(plan.id)}
                  >
                    <S.PlanBoxLabel>{planIdx + 1}</S.PlanBoxLabel>
                    <S.PlanBoxContent>{plan.title}</S.PlanBoxContent>
                  </S.PlanBox>
                ))}
                <S.AddPlan onClick={onClickCreatePlanButton(plansIdx)}>+</S.AddPlan>
              </S.PlanBoxes>
            </S.PlanLevel>
          ))}
        </S.Planner>
      </Layout>
      <Modal show={showCreatePlanModal} toggleModal={hideCreatePlanModal}>
        <S.CreatePlanModal>
          <S.CreatePlanTitle>목표 추가하기</S.CreatePlanTitle>
          <S.CreatePlanDescription>
            소중한 목표를 세우고 <br />
            한발짝 한발짝 나아가세요.
          </S.CreatePlanDescription>
          <S.CreatePlanElement>
            <S.CreatePlanLabel>목표</S.CreatePlanLabel>
            <S.CreatePlanInput value={newPlan.title} onChange={updateNewPlan("title")} />
          </S.CreatePlanElement>
          <S.CreatePlanElement>
            <S.CreatePlanLabel>설명</S.CreatePlanLabel>
            <S.CreatePlanTextarea value={newPlan.content} onChange={updateNewPlan("content")} />
          </S.CreatePlanElement>
          <S.CreatePlanButton onClick={createNewPlan}>생성하기</S.CreatePlanButton>
        </S.CreatePlanModal>
      </Modal>
      <Modal show={showLoginModal} toggleModal={() => {}}>
        <S.CreatePlanModal>
          <S.CreatePlanTitle>로그인을 해주세요</S.CreatePlanTitle>
          <S.CreatePlanDescription>
            여러분의 소중한 꿈들을 <br />이 플래너에 담아보세요
          </S.CreatePlanDescription>
          <S.CreatePlanElement>
            <S.CreatePlanLabel>아이디</S.CreatePlanLabel>
            <S.CreatePlanInput onChange={(e) => setId(e.target.value)} />
          </S.CreatePlanElement>
          <S.CreatePlanElement>
            <S.CreatePlanLabel>비밀번호</S.CreatePlanLabel>
            <S.CreatePlanInput onChange={(e) => setPw(e.target.value)} />
          </S.CreatePlanElement>
          <S.CreatePlanButton onClick={onClickLogin}>생성하기</S.CreatePlanButton>
        </S.CreatePlanModal>
      </Modal>
    </>
  );
};

export default Planner;
