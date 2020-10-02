import React from "react";

import * as S from "./styles";
import { usePlanner } from "./hooks";
import Modal from "../../component/modal";
import Layout from "../../component/layout";
import { useUser } from "../../context/user";

const Planner: React.FC = () => {
  const user = useUser();
  const {} = usePlanner();

  return (
    <>
      <Layout>
        <S.SideBar>
          <S.SideBarContainer></S.SideBarContainer>
        </S.SideBar>
        <S.Planner></S.Planner>
      </Layout>
      <Modal />
    </>
  );
};

export default Planner;
