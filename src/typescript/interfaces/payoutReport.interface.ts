export interface PayoutReportInterface {
    status: string
    data: payoutReportData
  }
  
  export interface payoutReportData {
    totalPayoutAmount: string
    totalCommission: string
  }