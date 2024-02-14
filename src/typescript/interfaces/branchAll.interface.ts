export interface branchAll {
  status: string;
  data: DataBranchAll;
}

export interface DataBranchAll {
  count: number;
  page: number;
  perPage: number;
  pages: number;
  docs: Doc[];
}

export interface Doc {
  id: number;
  name: string;
  code: string;
  logo: any;
  isAvailableForAcceptOrder: boolean;
  availabilityStatusBySuperAdmin?: boolean;
  superAdminAvailabilityStatusExpiry?: string;
  address: string;
  status: string;
  pharmacyName: string;
  pharmacy: Pharmacy;
  workingDays: WorkingDay[];
}

export interface Pharmacy {
  id: number;
  name: string;
  logo: string;
  applyLogoForAllBranches: boolean;
  allowBranchesForToggleAvailability: boolean;
}

export interface WorkingDay {
  id: number;
  pharmacyBranchId: number;
  dayOfWeek: string;
  isOpen: boolean;
  pharmacyBranchWorkingHour: PharmacyBranchWorkingHour[];
}

export interface PharmacyBranchWorkingHour {
  id: number;
  openAt: string;
  closeAt: string;
}
