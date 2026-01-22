export interface Contract {
  id: number;
  number: string;
  signed_at: Date;
  // contract_id: number;
  config: {
    paginate?: number;
    url: string;
  };
}
export interface TContract {
  id: number;
  number: string;
  signed_at: Date;
  // contract_id: number;
  config: {
    paginate?: number;
    url: string;
  };
}
