export interface branchInfoInterface {
    status: string
    data: branchInfoData
  }
  
  export interface branchInfoData {
    id: number
    name: string
    logo: any
    isAvailableForAcceptOrder: boolean
    availabilityStatusBySuperAdmin: boolean
    superAdminAvailabilityStatusExpiry: string
    address: string
    city: string
    longitude: number
    latitude: number
    postcode: string
    phone: string
    email: string
    status: string
    ryftAccountId: any
    ryftAccountEntityType: any
    ryftAccountVerificationStatus: any
    ryftAccountFrozen: boolean
    ryftPayoutMethodId: any
    ryftPayoutMethodStatus: any
    priceMultiple: string
    dispensingFee: string
    minimumItemCharge: string
    pharmacy: Pharmacy
    pharmacyBranchWorkingDay: PharmacyBranchWorkingDay[]
  }
  
  export interface Pharmacy {
    id: number
    name: string
    logo: string
    applyLogoForAllBranches: boolean
    allowBranchesForMedicationPriceChange: boolean
    allowBranchesForToggleAvailability: boolean
  }
  
  export interface PharmacyBranchWorkingDay {
    id: number
    dayOfWeek: string
    isOpen: boolean
    pharmacyBranchWorkingHour: PharmacyBranchWorkingHour[]
  }
  
  export interface PharmacyBranchWorkingHour {
    openAt: string
    closeAt: string
  }
  