import React from 'react'
import { talents } from '../Data/TalentData'
import TalentsCard from '../FindTalent/TalentsCard'
import { similar } from '../Data/Company'
import CompayCard from './CompayCard'

const SimilerCompanies = () => {
  return (
    <div>
      <div className='text-xl font-semibold mb-5'>Similer Companies</div>
      <div className='flex flex-col flex-wrap gap-5 '>
        {
            similar.map((company, index) => <CompayCard key={index} {...company} />)
        }
      </div>
    </div>
  )
}

export default SimilerCompanies
