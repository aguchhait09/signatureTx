import { useMutation } from '@tanstack/react-query'
import CustomSwitch from 'UI/CustomSwichWithLabel/CustomSwitch'
import { useState } from 'react'
import { updateStatusButton } from '../../lib/modules/branchTab/functions/Status.api'

interface ToggleInterface {
    availabilityStatusBySuperAdmin: boolean | undefined,
    id: number;
   
}

const ToggleStatus = (props: ToggleInterface) => {
    const [open, setOpen] = useState(false)

    const {mutate ,data } = useMutation({
        mutationFn: updateStatusButton,
    });
    console.log('data', data);   

    const handleChange =() => {
        setOpen(!open)
        mutate({
            availabilityStatusBySuperAdmin: !open,
            branchId: props?.id,
            superAdminAvailabilityStatusExpiry: "2024-02-16T12:30:00.000Z"
          })
    }
    return (
        <CustomSwitch
            checked={open}
            label={open ? "Online" : "Offline"}
            className='greenSwitch'
            onChange={handleChange}
        />
    )
}

export default ToggleStatus