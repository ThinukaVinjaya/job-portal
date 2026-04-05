import { Badge, Tabs} from '@mantine/core'
import React from 'react'
import CompanyJobs from '../CompanyProfile/CompanyJobs'
import CompanyEmployees from '../CompanyProfile/CompanyEmployees'
import JobDesc from '../JobDesc/JobDesc'
import { talents } from '../Data/TalentData'
import TalentsCard from '../FindTalent/TalentsCard'

const PostedJobDesc = () => {
  return (
    <div className='mt-5 w-3/4 px-5'>
       <div className='text-2xl font-semibold flex items-center'>Software Engineer
        <Badge variant='light' ml="sm" color='bright-sun.4' size="sm">Bage</Badge>
       </div>
       <div className='font-medium text-mine-shaft-300 mb-5'>New York, United States</div>
       <div>
          <Tabs variant='otline' radius="lg" defaultValue="overview">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                <Tabs.Tab value='overview' >Overview</Tabs.Tab>
                <Tabs.Tab value='applicants' >Application</Tabs.Tab>
                <Tabs.Tab value='invited' >Invited</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='overview' className='[&>div]:w-full'>
                <JobDesc />
            </Tabs.Panel>
            <Tabs.Panel value='applicants'>
                <div className='flex mt-10 flex-wrap gap-5 '>
                {
                    talents.map((talent, index)=> index < 6 && <TalentsCard key={index} {...talent} posted/> )
                }
                </div>
            </Tabs.Panel> 
            <Tabs.Panel value='invited'>
                 <div className='flex mt-10 flex-wrap gap-5 '>
                {
                    talents.map((talent, index)=> index < 6 && <TalentsCard key={index} {...talent} posted/> )
                }
                </div>
            </Tabs.Panel>
          </Tabs>
       </div>
    </div>
  )
}

export default PostedJobDesc
