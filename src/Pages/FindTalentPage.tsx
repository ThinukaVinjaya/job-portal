import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalent/SearchBar'
import TalentsCard from '../FindTalent/TalentsCard'
import Talents from '../FindTalent/Talents'

const FindTalentPage = () => {
  return (
      <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
            <Divider  size="xs" mx="md" />
            <SearchBar />
            <Divider size="xs" mx="md" />
            <div className='ml-28 mr-28'><Talents /></div>
            
        </div>
  )
}

export default FindTalentPage
