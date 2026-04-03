import { Divider } from '@mantine/core'
import React from 'react'
import PostJob from '../PostJob/PostJob'

const PostJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] ">
            <Divider size="xs" />
            <PostJob />
        </div>
  )
}

export default PostJobPage
