import { Divider } from '@mantine/core'
import React from 'react'
import PostJobPage from './PostJobPage'
import PostedJob from '../PostedJob/PostedJob'
import PostedJobDesc from '../PostedJob/PostedJobDesc'

const PostedJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-3">
      <Divider size="xs" />
           <div className='flex gap-5 justify-center'>
             <PostedJob />
             <PostedJobDesc />
           </div>
    </div>
  )
}

export default PostedJobPage
