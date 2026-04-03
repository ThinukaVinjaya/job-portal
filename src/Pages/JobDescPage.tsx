import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

function JobDescPage() {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs"  />
            <Link className='my-4 ml-11 inline-block ' to="/find-jobs">
                <Button leftSection={<IconArrowLeft size={20} />} color='bright-sun.4' variant='light'>Back</Button>
            </Link>
             <div className='flex gap-5 justify-center'>
              
             </div>
        </div>
  )
}

export default JobDescPage
