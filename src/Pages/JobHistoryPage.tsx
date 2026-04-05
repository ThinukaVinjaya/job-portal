import { Divider } from "@mantine/core"
import JobHistory from "../JobHistory/JobHistory"

const JobHistoryPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-3">
      <Divider size="xs" />
           <div className='mt-7 ml-32 justify-center '>
             <JobHistory />
           </div>
    </div>
  )
}

export default JobHistoryPage