import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { BranchInterface } from "typescript/interfaces/branchRes.interface"

interface propsType{
    id?: string
}

export const branchTimeApi = async (props: propsType) => {
    const res = await axiosInstance.post<BranchInterface>(
        endpoints.brances.branchResTime, {
        branchId: props?.id,
        endDate: "2024-02-29",
        startDate: "2024-02-01"
    }
    )
    return res?.data
}