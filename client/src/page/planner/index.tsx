import React from "react";

import * as S from "./styles";
import { usePlanner } from "./hooks";
import Modal from "../../component/modal";
import Layout from "../../component/layout";
import { useUser } from "../../context/user";
import { getRandomHexColor } from "../../lib/color";
import SideBarGoal from "../../component/sidebar-goal";

const Planner: React.FC = () => {
  const user = useUser();
  const { planTree, onClickPlan } = usePlanner();

  return (
    <>
      <Layout>
        <S.SideBar>
          <SideBarGoal />
        </S.SideBar>
        <S.Planner>
          {planTree.map((plans, plansIdx) => (
            <S.PlanLevel key={plansIdx}>
              <S.PlanLevelMeta
                style={{ backgroundColor: `#${getRandomHexColor()}` }}
              ></S.PlanLevelMeta>
              <S.PlanBoxes>
                {plans.map((plan, planIdx) => (
                  <S.PlanBox key={planIdx} onClick={onClickPlan(plan.id)}>
                    <S.PlanBoxLabel>{planIdx + 1}</S.PlanBoxLabel>
                    <S.PlanBoxContent>{plan.title}</S.PlanBoxContent>
                  </S.PlanBox>
                ))}
              </S.PlanBoxes>
            </S.PlanLevel>
          ))}
        </S.Planner>
      </Layout>
      <Modal />
    </>
  );
};

export default Planner;
