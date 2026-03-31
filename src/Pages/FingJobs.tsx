import React from 'react'
import SearchBar from '../FindJobs/SearchBar';
import { Divider } from '@mantine/core';
import Jobs from '../FindJobs/Jobs';
 

const FingJobs = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Divider  mr="xs" mx="md" />
            <SearchBar />
            <Divider  mr="xs" mx="md" />
            <Jobs />
        </div>
    )
}

export default FingJobs
