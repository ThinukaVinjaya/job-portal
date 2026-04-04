import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ApplyJobComp from '../ApplyJob/ApplyJobComp'

function ApplyJobPage() {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-3">
      <Divider size="xs" />
           <Link className='my-5 inline-block ml-11' to="/jobs">
              <Button color="bright-sun.5" leftSection={<IconArrowLeft size={20} />} variant='light' >Back</Button>
           </Link>
           <ApplyJobComp />
    </div>
  )
}

export default ApplyJobPage
