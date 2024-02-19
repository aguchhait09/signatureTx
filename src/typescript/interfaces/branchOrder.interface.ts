export interface BranchOrderInterface {
    status: string
    data: BranchOrderData
  }
  
  export interface BranchOrderData {
    totalOrderCount: number
    totalOrderAmount: string
  }
  