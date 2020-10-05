export default class Plan {
  public id: number;
  public title: string;
  public content: string;
  public accomplished: boolean;

  public createdAt: Date;
  public updatedAt: Date;

  public children: Plan[];
  public parent: Plan;
  public parentId: number;
}
