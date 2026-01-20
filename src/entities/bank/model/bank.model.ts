export interface Bank {
  id: number;
  name: string;
  code: string;
  contract_id: number;
  cconfig: {
    paginate?: number;
    url: string;
  };
}
export interface TBank {
  id: number;
  name: string;
  code: string;
  contract_id: number;
  config: {
    paginate?: number;
    url: string;
  };
}
