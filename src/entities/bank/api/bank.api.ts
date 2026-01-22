import { Contract } from "@/entities/templates/api/contract.api";
import type {
  TPaginationResponse,
  TResourceField,
} from "@/shared/types/global";

export class Bank {
  static config = {
    paginate: 50,
    url: "/banks",
  };

  static attributes: TResourceField[] = [
    { name: "name", label: "Наименование", type: "text" },
    { name: "code", label: "Код", type: "text" },
    { name: "contract_number", label: "Контракт", type: "text" },
  ];

  id: number = 0;
  name: string = "";
  code: string = "";
  contract: Contract = new Contract();

  constructor(data: Partial<Bank> = {}) {
    Object.assign(this, {
      id: 0,
      name: "",
      code: "",
      contract: new Contract(),
      ...data,
    });
  }

  get contract_number(): string {
    return this.contract?.number ?? "";
  }

  static async getAny(page: number = 1): Promise<TPaginationResponse<Bank>> {
    const response = await api.get(this.config.url, {
      params: { paginate: this.config.paginate, page },
    });

    const banksData = response.data;
    const banks = banksData.data;

    banksData.data = banks.map((item: any) => new Bank(item));
    return banksData;
  }

  static async get(id: number): Promise<Bank | undefined> {
    const banks = await Bank.getAny();

    return banks.data.find((b) => b.id === id);
  }

  static async store(data: Partial<Bank>): Promise<any> {
    const response = await api.post(Bank.config.url, data);

    return response.data;
  }

  async update(data: Partial<Bank>): Promise<any> {
    const response = await api.put(`${Bank.config.url}/${this.id}`, data);
    Object.assign(this, response.data);
    return this;
  }

  async destroy(): Promise<void> {
    await api.delete(`${Bank.config.url}/${this.id}`);
  }
}
