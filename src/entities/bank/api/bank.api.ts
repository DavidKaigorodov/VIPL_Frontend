export class Bank {
  static config = {
    paginate: 50,
    url: "/banks",
  };

  static fillable = {
    name: {
      label: "Наименование",
      type: "string",
    },
    code: {
      label: "Код",
      type: "string",
    },
  };

  id: number;
  name: string;
  code: string;
  contract_id: number;

  constructor(id: number, name: string, code: string, contract_id: number) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.contract_id = contract_id;
  }

  static async getAny(page: number = 1): Promise<any> {
    const response = await api.get(this.config.url, {
      params: { paginate: this.config.paginate, page },
    });

    return response.data;
  }

  static async get(id: number): Promise<any | null> {
    const banks = (await Bank.getAny()).data;
    const bank = banks.find((b: any) => b.id == id);
    
    return bank ?? null;
  }

  static store(data: object): any {} // DEV

  async update(data: object): Promise<any> {
    api.put(Bank.config.url + "/" + this.id, { params: { ...data } });
  }

  async destroy(id: number): Promise<any> {
    await api.delete(Bank.config.url + "/" + this.id);
  }
}
