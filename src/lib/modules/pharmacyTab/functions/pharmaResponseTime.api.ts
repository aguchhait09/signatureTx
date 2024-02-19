import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { PharmaAvgResTime } from "typescript/interfaces/avgResponseTimePharma.interface"

interface propsInterface {
    pharmacyId?: string
}

export const avgResTime = async (props: propsInterface) => {
    const res = await axiosInstance.post<PharmaAvgResTime>(
        endpoints.pharmacy.avgTime, {
        endDate: "2024-02-29",
        pharmacyId: props.pharmacyId,
        startDate: "2024-02-01"
    }
    )
    return res?.data
}