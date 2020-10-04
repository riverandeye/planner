import React from "react";

import * as S from "./styles";
import { usePlanner } from "./hooks";
import Modal from "../../component/modal";
import Layout from "../../component/layout";
import { useUser } from "../../context/user";
import { getRandomHexColor } from "../../lib/color";

const Planner: React.FC = () => {
  const user = useUser();
  const {} = usePlanner();

  return (
    <>
      <Layout>
        <S.SideBar>
          <S.SideBarContainer></S.SideBarContainer>
        </S.SideBar>
        <S.Planner>
          <S.PlanLevel>
            <S.PlanLevelMeta
              style={{ backgroundColor: `#${getRandomHexColor()}` }}
            ></S.PlanLevelMeta>
            <S.PlanBoxes>
              <S.PlanBox>
                <S.PlanBoxLabel>1</S.PlanBoxLabel>
                <S.PlanBoxContent>가르치는 사람 되기</S.PlanBoxContent>
              </S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
            </S.PlanBoxes>
          </S.PlanLevel>
          <S.PlanLevel>
            <S.PlanLevelMeta
              style={{ backgroundColor: `#${getRandomHexColor()}` }}
            ></S.PlanLevelMeta>
            <S.PlanBoxes>
              <S.PlanBox>
                <S.PlanBoxLabel>1</S.PlanBoxLabel>
                <S.PlanBoxContent>가르치는 사람 되기</S.PlanBoxContent>
              </S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
            </S.PlanBoxes>
          </S.PlanLevel>
          <S.PlanLevel>
            <S.PlanLevelMeta
              style={{ backgroundColor: `#${getRandomHexColor()}` }}
            ></S.PlanLevelMeta>
            <S.PlanBoxes>
              <S.PlanBox>
                <S.PlanBoxLabel>1</S.PlanBoxLabel>
                <S.PlanBoxContent>가르치는 사람 되기</S.PlanBoxContent>
              </S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
            </S.PlanBoxes>
          </S.PlanLevel>
          <S.PlanLevel>
            <S.PlanLevelMeta
              style={{ backgroundColor: `#${getRandomHexColor()}` }}
            ></S.PlanLevelMeta>
            <S.PlanBoxes>
              <S.PlanBox>
                <S.PlanBoxLabel>1</S.PlanBoxLabel>
                <S.PlanBoxContent>가르치는 사람 되기</S.PlanBoxContent>
              </S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
            </S.PlanBoxes>
          </S.PlanLevel>
          <S.PlanLevel>
            <S.PlanLevelMeta
              style={{ backgroundColor: `#${getRandomHexColor()}` }}
            ></S.PlanLevelMeta>
            <S.PlanBoxes>
              <S.PlanBox>
                <S.PlanBoxLabel>1</S.PlanBoxLabel>
                <S.PlanBoxContent>가르치는 사람 되기</S.PlanBoxContent>
              </S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
            </S.PlanBoxes>
          </S.PlanLevel>
          <S.PlanLevel>
            <S.PlanLevelMeta
              style={{ backgroundColor: `#${getRandomHexColor()}` }}
            ></S.PlanLevelMeta>
            <S.PlanBoxes>
              <S.PlanBox>
                <S.PlanBoxLabel>1</S.PlanBoxLabel>
                <S.PlanBoxContent>가르치는 사람 되기</S.PlanBoxContent>
              </S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
            </S.PlanBoxes>
          </S.PlanLevel>
          <S.PlanLevel>
            <S.PlanLevelMeta
              style={{ backgroundColor: `#${getRandomHexColor()}` }}
            ></S.PlanLevelMeta>
            <S.PlanBoxes>
              <S.PlanBox>
                <S.PlanBoxLabel>1</S.PlanBoxLabel>
                <S.PlanBoxContent>가르치는 사람 되기</S.PlanBoxContent>
              </S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
              <S.PlanBox></S.PlanBox>
            </S.PlanBoxes>
          </S.PlanLevel>
        </S.Planner>
      </Layout>
      <Modal />
    </>
  );
};

export default Planner;
