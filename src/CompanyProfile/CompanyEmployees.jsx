import React from 'react'
import { jobList } from '../Data/JobsData'
import JobCard from '../FindJobs/JobCard'
import { talents } from '../Data/TalentData'
import TalentsCard from '../FindTalent/TalentsCard'

const CompanyEmployees =() => {
  return (
    <div className='flex mt-10 flex-wrap gap-10'>
         {
            talents.map((talent, index) => index<6&&<TalentsCard key={index} {...talent} />)
         }      
    </div>
  )
}

export default CompanyEmployees;
