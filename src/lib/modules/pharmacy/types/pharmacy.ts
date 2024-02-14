import { UserData } from "lib/modules/user/types/user";
import { AccountStatusesType } from "typescript/@types/enums";

export type PharmacyData = Partial<{
  id: number;
  name: string;
  logo: string;
  applyLogoForAllBranches: boolean;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  collectPaymentForAllBranches: boolean;
  ryftAccountId: string;
  ryftAccountEntityType: string;
  ryftAccountVerificationStatus: string;
  ryftAccountFrozen: boolean;
  ryftPayoutMethodId: string;
  ryftPayoutMethodStatus: string;
  allowBranchesForMedicationPriceChange: boolean;
  priceMultiple: string;
  dispensingFee: string;
  minimumItemCharge: string;
  allowBranchesForToggleAvailability: boolean;
  user: Pick<UserData, "email" | "surname" | "name">;
  status: AccountStatusesType;
}>;
