import { useState } from 'react'
import useToggleProjectStatus from './useToggleProjectStatus'
import Loading from '../../ui/Loading'
import ToggleInput from '../../ui/ToggleInput'

function ToggleProjectStatus({project}) {
  const [enabled, setEnabled]=useState(( project.status === "OPEN") ? true : false )
  const {isUpdating, toggleProjectStatus} = useToggleProjectStatus()
  const toggleHandler=()=>{
    const status = (project.status === "OPEN")? "CLOSED" : "OPEN"
    toggleProjectStatus({
        id:project._id,
        data:{status}
        },
        {
            onSuccess:()=>{
                setEnabled(pre=>!pre)
            }
        }
    
    )
  }

  return (
      <div className='flex items-center justify-center w-full'>
          {isUpdating 
          ? <Loading height='20' width='30'/> 
          : <ToggleInput
            label={enabled ? "باز" :"بسته"}
            enabled={enabled}
            onChange={toggleHandler}
            />
          }
      </div>
  )
}
export default ToggleProjectStatus