export default class PlanForm {
  public constructor(
    public title: string,
    public content: string,
    public accomplished: boolean,
    public parentId: number,
  ) {}
}
