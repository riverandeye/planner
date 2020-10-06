import { useCallback, useEffect, useState } from "react";
import { getChildrenPlans, getRootPlans } from "../../api/plan";
import { Id에해당하는Plan을갖고있는배열의인덱스를반환한다 } from "../../lib/plan";
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
      const idx = Id에해당하는Plan을갖고있는배열의인덱스를반환한다(id, planTree);
      console.log(idx);

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
