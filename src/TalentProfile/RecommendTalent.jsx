import React from 'react'
import { talents } from '../Data/TalentData'
import TalentsCard from '../FindTalent/TalentsCard'

const RecommendTalent = () => {
  return (
    <div>
      <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
      <div className='flex flex-col flex-wrap gap-5'>
        {talents.map((talent, index)=>index<4 &&<TalentsCard key={index} {...talent} />)}
      </div>
    </div>
  )
}

export default RecommendTalent
