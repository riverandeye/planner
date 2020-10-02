import React from "react";

import * as S from "./styles";
import { useMain } from "./hooks";
import Modal from "../../component/modal";
import Layout from "../../component/layout";
import { useUser } from "../../context/user";
import { Stage, Sprite } from "@inlet/react-pixi";
import { Rectangle } from "../../graphic/rectangular";

const Main: React.FC = () => {
  const user = useUser();
  const {} = useMain();

  return (
    <>
      <Layout>
        <S.SideBar>
          <S.SideBarContainer></S.SideBarContainer>
        </S.SideBar>
        <S.Main>
          <Stage>
            <Rectangle x={0} y={0} width={800} height={600} color={0xff0000}></Rectangle>
          </Stage>
        </S.Main>
      </Layout>
      <Modal />
    </>
  );
};

export default Main;
