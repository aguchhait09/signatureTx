export interface pharmacyTab {
  status: string;
  data: Data;
}

export interface Data {
  count: number;
  page: number;
  perPage: number;
  pages: number;
  docs: Doc[];
}

export interface Doc {
  id: number;
  name: string;
  logo?: string;
  status: string;
  totalBranch: number;
  user: User;
}

export interface User {
  name: string;
  surname: string;
}
