import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { BranchOrderInterface } from "typescript/interfaces/branchOrder.interface"

interface propsType{
    id?: string
}

export const branchOrderApi = async (props: propsType) => {
    const res = await axiosInstance.post<BranchOrderInterface>(
        endpoints.brances.orderValue, {
        branchId: props?.id,
        endDate: "2024-02-29",
        startDate: "2024-02-01"
    }
    )
    return res?.data
}