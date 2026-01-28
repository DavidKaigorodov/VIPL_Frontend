import { BaseModel } from "../BaseModel";

export class Contract extends BaseModel{
    public attributes = [
    {
      name: "number",
    },
    {
      name: "signed",
    },
    {
      name: "template_id",
    },
  ];
}