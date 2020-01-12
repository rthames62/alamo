import { ICinema } from './Cinema';

export interface IMarket {
  id: string;
  slug: string;
  name: string;
  status: string;
  isOpenAccessSeasonPassMarket: boolean;
  cinemas: ICinema[];
  marketStrings: { key: string; value: string; }[];
}
