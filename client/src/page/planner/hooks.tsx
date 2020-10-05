import { useCallback, useEffect, useState } from "react";
import { getChildrenPlans, getRootPlans } from "../../api/plan";
import Plan from "../../model/plan";

export const usePlanner = () => {
  const [planTree, setPlanTree] = useState([] as Plan[][]);

  useEffect(() => {
    (async () => {
      setPlanTree([await getRootPlans()]);
    })();
  }, []);

  const onClickPlan = useCallback(
    (id: number) => async () => {
      const children = await getChildrenPlans(id);
      if (!children.length) return;

      setPlanTree([...planTree, children]);
    },
    [planTree],
  );

  return {
    planTree,
    onClickPlan,
  };
};
