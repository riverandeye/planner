export const getRootPlans = async () => {
  const response = await fetch("/api/rootgoal");
  const plans = await response.json();

  return plans;
};

export const getChildrenPlans = async (id: number) => {
  const response = await fetch(`/api/goal/${id}/children`);
  const childrenPlans = await response.json();

  return childrenPlans;
};
