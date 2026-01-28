import axios from "axios";
import { BaseModel } from "../BaseModel.ts";
import { Contract } from "../contract/Contract.ts";

export class Bank extends BaseModel {
  constructor() {
    super();
  }

  static API = axios.create({ baseURL: "http://vipl.local/api/banks" });

  public attributes = [
    {
      name: 'id',
    },
    {
      name: 'code',
    },
    {
      name: 'name',
    },
    {
      name: 'contract',
      relation: Contract,
    },
  ];

  // public 
  //  = [
  //   {
  //     label: "Код",
  //     type: "text",
  //   },
  //   {
  //     label: "Наименование",
  //     type: "text",
  //   },
  //   {
  //     label: "Договор",
  //     type: "select",
  //   },
  // ];

  // public displayed = [
  //   {
  //     header: "Код",
  //     key: "code",
  //   },
  //   {
  //     header: "Наименование",
  //     key: "name",
  //   },
  //   {
  //     header: "Номер договора",
  //     key: "contract.number",
  //   },
  // ];
}
