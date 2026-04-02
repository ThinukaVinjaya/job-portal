import React from 'react'
import SearchBar from '../FindJobs/SearchBar';
import { Divider } from '@mantine/core';
import Jobs from '../FindJobs/Jobs';
 

const FingJobs = () => {
    return (
        <div className="min-h-[80vh] bg-mine-shaft-950 font-['poppins']">
            <Divider  size="xs" mx="md" />
            <SearchBar />
            <Divider  mr="xs" mx="md" />
            <div className='ml-24 mr-24'><Jobs /></div>
        </div>
    )
}
    
export default FingJobs
