import PlanForm from "../model/plan-form";

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

export const createPlan = async (plan: PlanForm) => {
  plan.content = plan.content.trim();
  plan.title = plan.title.trim();

  const response = await fetch("/api/goal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(plan),
  });

  return response;
};

export const deletePlan = async (id: number) => {
  const response = await fetch(`/api/goal/${id}`, {
    method: "DELETE",
  });

  return response;
};
