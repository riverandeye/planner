import { useCallback, useEffect, useState } from "react";

import Plan from "../../model/plan";
import PlanForm from "../../model/plan-form";
import { checkMobile } from "../../lib/mobile";
import { createPlan, deletePlan, getChildrenPlans, getRootPlans } from "../../api/plan";
import { Id에해당하는Plan을갖고있는배열의인덱스를반환한다 } from "../../lib/plan";

export const usePlanner = () => {
  const [clickedHistory, setClickedHistory] = useState([]);
  const [planTree, setPlanTree] = useState([] as Plan[][]);
  const [currentPlan, setCurrentPlan] = useState(null as Plan);

  const [showCreatePlanModal, setShowCreatePlanModal] = useState(false);
  const [newPlan, setNewPlan] = useState(new PlanForm("", "", false, null));

  // 클릭했을 때 Overflow 면 자동으로 스크롤 및 스르륵 애니메이션 기능은 후순위
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    (async () => {
      setPlanTree([await getRootPlans()]);
    })();

    setIsMobile(checkMobile());
  }, []);

  const updateNewPlan = useCallback(
    (property: string) => (e: any) => {
      setNewPlan({
        ...newPlan,
        [property]: e.target.value,
      });
    },
    [newPlan],
  );

  const onClickPlan = useCallback(
    (id: number) => async () => {
      if (clickedHistory.includes(id)) return;

      const idx = Id에해당하는Plan을갖고있는배열의인덱스를반환한다(id, planTree);
      setPlanTree([...planTree.slice(0, idx + 1), []]);
      setClickedHistory([...clickedHistory.slice(0, idx), id]);
      setCurrentPlan(planTree[idx].find((value) => value.id === id));

      const children = await getChildrenPlans(id);
      if (!children || !children.length) return;

      setPlanTree([...planTree.slice(0, idx + 1), children]);
    },
    [planTree, clickedHistory],
  );

  const onClickCreatePlanButton = useCallback(
    (level: number) => async () => {
      setNewPlan(new PlanForm("", "", false, clickedHistory[level - 1]));
      setShowCreatePlanModal(true);
    },
    [clickedHistory, newPlan],
  );

  const createNewPlan = useCallback(async () => {
    if (!newPlan.title.trim() || !newPlan.content.trim()) {
      alert("목표와 설명을 작성해주세요");
      return;
    }

    const response = await createPlan(newPlan);

    if (!response.ok) {
      alert("생성에 실패했습니다!");
      console.log(await response.json());
      return;
    }

    const newLevels = !newPlan.parentId
      ? await getRootPlans()
      : await getChildrenPlans(newPlan.parentId);

    if (!newPlan.parentId) {
      setPlanTree([newLevels, ...planTree.slice(1)]);
      setShowCreatePlanModal(false);
      return;
    }

    const parentIdx = Id에해당하는Plan을갖고있는배열의인덱스를반환한다(newPlan.parentId, planTree);
    const front = planTree.slice(0, parentIdx + 1);
    const back = planTree.slice(parentIdx + 2, planTree.length + 1);

    setPlanTree([...front, newLevels, ...back]);

    // window.location.reload();
    setShowCreatePlanModal(false);
  }, [newPlan, planTree, clickedHistory]);

  const hideCreatePlanModal = useCallback(() => {
    setShowCreatePlanModal(!showCreatePlanModal);
  }, [showCreatePlanModal]);

  const deleteSelectedPlan = useCallback(async () => {
    if (planTree[planTree.length - 1].length) {
      alert("하위 목표가 설정되어 있어 삭제할 수 없습니다.");
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    const result = await deletePlan(currentPlan.id);

    if (!result.ok) {
      alert("예상치 못한 오류로 삭제에 실패하였습니다");
      console.log(await result.json());
      return;
    }

    // Plantree 업데이트
    const newPlanTree = planTree.map((plans) => plans.filter((plan) => plan.id !== currentPlan.id));

    setPlanTree(newPlanTree);

    // ClickHistory 업데이트
    setClickedHistory(clickedHistory.slice(0, clickedHistory.indexOf(currentPlan.id)));

    // CurrentPlan 초기화
    setCurrentPlan(null);
  }, [currentPlan, planTree, clickedHistory]);

  return {
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
  };
};
