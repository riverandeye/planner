import Plan from "../model/plan";

export const Id에해당하는Plan을갖고있는배열의인덱스를반환한다 = (
  id: number,
  planTree: Plan[][],
) => {
  return planTree.findIndex((plans) => plans.some((plan) => plan.id === id));
};
