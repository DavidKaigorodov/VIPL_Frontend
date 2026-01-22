import type { TPaginationResponse, TResourceField } from "@/shared/types/global";

export class Contract {
  static config = {
    paginate: 50,
    url: "/contracts",
  };

  static attributes: TResourceField[] = [
    { name: "number", label: "Номер договора", type: "text" },
    { name: "signed_at", label: "Дата заключения", type: "date" },
    // { name: "template", label: " Шаблон", type: "number" },
  ];

  id: number = 0;
  number: string = "";
  signed_at: Date = new Date;
  // template: number = 6;

  constructor(data: Partial<Contract> = {}) {
    Object.assign(this, {
      id: 0,
      number: "",
      signed_at: new Date,
      ...data,
    });
  }

  static async getAny(page: number = 1): Promise<TPaginationResponse<Contract>> {
    const response = await api.get(this.config.url, {
      params: { paginate: this.config.paginate, page },
    });

    const contractsData = response.data;
    const contracts = contractsData.data;

    contractsData.data = contracts.map((item: any) => new Contract(item));
    return contractsData;
  }

  static async get(id: number): Promise<Contract | undefined> {
    const contracts = await Contract.getAny();
    
    return contracts.data.find((b) => b.id === id);
  }

  static async store(data: Partial<Contract>): Promise<any> {
    const response = await api.post(Contract.config.url, data);
    
    return response.data;
  }

  async update(data: Partial<Contract>): Promise<any> {
    const response = await api.put(`${Contract.config.url}/${this.id}`, data);
    Object.assign(this, response.data);
    return this;
  }

  async destroy(): Promise<void> {
    await api.delete(`${Contract.config.url}/${this.id}`);
  }
}
