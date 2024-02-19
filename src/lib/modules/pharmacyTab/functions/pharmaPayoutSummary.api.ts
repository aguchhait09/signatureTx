import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { PayoutReportInterface } from "typescript/interfaces/payoutReport.interface"

interface propsInterface {
    pharmacyId?: string
}

export const payoutReportApi = async (props: propsInterface) => {
    const res = await axiosInstance.post<PayoutReportInterface>(
        endpoints.pharmacy.payoutSummary, {
        endDate: "2024-02-29",
        pharmacyId: props.pharmacyId,
        startDate: "2024-02-01"
    }
    )
    console.log('payout', res?.data);
    
    return res?.data
}