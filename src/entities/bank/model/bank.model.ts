export interface Bank {
  id: number;
  name: string;
  code: string;
  contract_id: number;
  config: object;
}
export type TBank = {
  id: number;
  name: string;
  code: string;
  contract_id: number;
  config: Record<string, { paginate?: number; url: string }>;
};
